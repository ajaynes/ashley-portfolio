import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Resume from "../components/resume"
import Education from "../components/education"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Resume />
    <Education />
  </Layout>
)

export default IndexPage
