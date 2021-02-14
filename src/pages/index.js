import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Andrew Lombardi"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          Hello!{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>

          Read my <Link to="https://medium.com/@kinabalu">latest articles on medium</Link>.
        </p>
        <a href="https://medium.com/@kinabalu">
          <Button marginTop="35px">View Medium Articles</Button>
        </a>
        &nbsp;
        <Link to="/blog/">
          <Button>View Blog Archive</Button>
        </Link>
        &nbsp;
        <a href="https://mysticcoders.com">
          <Button>Visit Mystic</Button>
        </a>
      </Layout>
    )
  }
}

export default IndexPage
