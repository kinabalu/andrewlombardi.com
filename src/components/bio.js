/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Written by <strong>{author}</strong> who lives and works in Orange County, CA.
              {` `}
              <a style={{ color: 'black', textDecoration: 'none', marginRight: rhythm(1 / 2)}} href={`https://facebook.com/${social.facebook}`}>
                  <FaFacebook />
              </a>
              <a style={{ color: 'black', textDecoration: 'none', marginRight: rhythm(1 / 2)}} href={`https://twitter.com/${social.twitter}`}>
                  <FaTwitter />
              </a>
              <a style={{ color: 'black', textDecoration: 'none', marginRight: rhythm(1 / 2)}} href={`https://instagram.com/${social.instagram}`}>
                  <FaInstagram />
              </a>
              <a style={{ color: 'black', textDecoration: 'none', marginRight: rhythm(1 / 2)}} href={`https://linkedin.com/in/${social.linkedin}`}>
                  <FaLinkedin />
              </a>
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          facebook
          linkedin
          instagram
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default Bio
