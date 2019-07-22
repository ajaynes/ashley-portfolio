import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout>
    <div>Portfolio Page</div>
    {data.allMarkdownRemark.edges.map(edge => (
      <div key={edge.node.id}>
        <div>{edge.node.frontmatter.title}</div>
        <Link to={edge.node.frontmatter.link}>
          <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
        </Link>
      </div>
    ))}
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
