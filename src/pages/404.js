import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h3 className="break is-uppercase has-text-weight-bold is-size-6 has-text-black">
      Not Found
    </h3>
    <div className="card-content">
      <p>
        There doesn't appear to be anything here. <link to="/">Go back.</link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
