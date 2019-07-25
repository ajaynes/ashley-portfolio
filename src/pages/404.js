import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h3 className="break is-uppercase has-text-weight-bold is-size-6 has-text-black">
      404 Not Found
    </h3>
    <div className="card-content">
      <p>
        There's nothing here. <Link to="/">Go Back</Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
