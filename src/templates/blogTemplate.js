import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  console.log(posts)
  return (
    <Layout>
      {posts.map(post => (
        <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($topCategory: String) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $topCategory } } }
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
  }
`
