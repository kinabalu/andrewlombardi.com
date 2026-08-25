#!/usr/bin/env bash
set -euo pipefail

fail=0

# Resolve a site-root-relative URL to the file Netlify would serve for it.
resolve() {
  local url="${1%%\#*}"
  url="${url%%\?*}"
  [ "$url" = "/" ] && url="/index.html"
  local path=".${url}"
  if [ -f "$path" ]; then echo "$path"; return 0; fi
  if [ -f "${path}.html" ]; then echo "${path}.html"; return 0; fi
  if [ -f "${path}/index.html" ]; then echo "${path}/index.html"; return 0; fi
  return 1
}

echo "Checking local references in HTML files"
while IFS= read -r ref; do
  if target=$(resolve "$ref"); then
    echo "  ok   $ref -> $target"
  else
    echo "  FAIL $ref (no matching file)"
    fail=1
  fi
done < <(grep -ohE '(href|src)="[^"]+"' ./*.html \
         | sed -E 's/.*="([^"]*)"/\1/' \
         | grep -E '^/' \
         | sort -u)

echo "Checking netlify.toml redirect targets"
while IFS= read -r to; do
  if target=$(resolve "$to"); then
    echo "  ok   $to -> $target"
  else
    echo "  FAIL redirect target $to (no matching file)"
    fail=1
  fi
done < <(grep -E '^\s*to\s*=' netlify.toml | sed -E 's/.*"([^"]*)".*/\1/' | sort -u)

echo "Checking every HTML file has a title and balanced html tags"
for f in ./*.html; do
  grep -qiE '<title>[^<]+</title>' "$f" || { echo "  FAIL $f has no non-empty <title>"; fail=1; }
  open=$(grep -oiE '<html[ >]' "$f" | wc -l | tr -d ' ')
  close=$(grep -oiE '</html>' "$f" | wc -l | tr -d ' ')
  if [ "$open" != "1" ] || [ "$close" != "1" ]; then
    echo "  FAIL $f has $open <html> and $close </html> tags"
    fail=1
  fi
done

[ "$fail" -eq 0 ] && echo "All checks passed" || echo "Checks failed"
exit $fail
