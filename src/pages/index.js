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
        <Link to="https://medium.com/@kinabalu">
          <Button marginTop="35px">View Medium Articles</Button>
        </Link>
        &nbsp;
        <Link to="/blog/">
          <Button>View Blog Archive</Button>
        </Link>
        &nbsp;
        <Link to="https://mysticcoders.com">
          <Button>Visit Mystic</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
