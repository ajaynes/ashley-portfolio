import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/resume"
import Education from "../components/education"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Resume />
    <Education />
  </Layout>
)

export default IndexPage
