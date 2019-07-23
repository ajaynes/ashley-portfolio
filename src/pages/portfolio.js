import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout>
    <h3 className="break is-uppercase has-text-weight-bold is-size-6 has-text-black">
      Portfolio
    </h3>
    <div className="card-content">
      <div className="columns is-multiline">
        {data.allMarkdownRemark.edges.map(edge => (
          <div className="column is-half">
            <div className="card" key={edge.node.id}>
              <Link to={edge.node.frontmatter.link}>
                <header class="card-header">
                  <p class="card-header-title">{edge.node.frontmatter.title}</p>
                </header>
                <div className="card-image">
                  <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export default SecondPage
export const query = graphql`
  query featuredQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "featured" } } }) {
      edges {
        node {
          frontmatter {
            title
            link
          }
          html
          id
        }
      }
    }
  }
`
