# andrewlombardi.com

Personal website for Andrew Lombardi. Static HTML site deployed to Netlify.

## Local Development

Just open `index.html` in a browser, or use a local server:

```bash
npx serve .
```

## Deployment

Pushes to `main` auto-deploy to Netlify.

## Checks

`scripts/check-site.sh` verifies that every site-root-relative link and asset
reference in the HTML resolves to a real file, that the `netlify.toml` redirect
targets exist, and that each page has a title. It runs in CI on every push and
pull request, and takes no dependencies beyond bash.

```bash
./scripts/check-site.sh
```
