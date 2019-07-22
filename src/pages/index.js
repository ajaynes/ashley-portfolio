import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/resume"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Resume />
  </Layout>
)

export default IndexPage
