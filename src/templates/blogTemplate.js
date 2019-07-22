import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  const posts = data.portfolioimages.edges
  const about = data.about
  console.log(data)
  return (
    <Layout>
      <h1>{about.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: about.html }} />
      {posts.map(post => (
        <div key={post.node.id}>
          <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($topCategory: String) {
    portfolioimages: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $topCategory } } }
      sort: { fields: frontmatter___listing, order: ASC }
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
    about: markdownRemark(frontmatter: { topCategory: { eq: $topCategory } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
