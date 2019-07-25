import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" />
    <h3 className="break is-uppercase has-text-weight-bold is-size-6 has-text-black">
      Portfolio
    </h3>
    <div className="card-content">
      <Breadcrumbs pagename="Portfolio" parent={false} />
      <div className="columns is-multiline">
        {data.allMarkdownRemark.edges.map(edge => (
          <div className="column is-half" key={edge.node.id}>
            <div className="card">
              <Link to={edge.node.frontmatter.link}>
                <header className="card-header">
                  <p className="card-header-title">
                    {edge.node.frontmatter.title}
                  </p>
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
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "featured" } } }
      sort: { fields: frontmatter___listing, order: ASC }
    ) {
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
