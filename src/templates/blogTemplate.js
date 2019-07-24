import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  const posts = data.portfolioimages.edges
  const about = data.about
  return (
    <Layout>
      <h3 className="break is-uppercase has-text-weight-bold is-size-6 has-text-black">
        {about.frontmatter.title}
      </h3>
      <div className="card-content">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: about.html }}
        />
        {posts.map(post => (
          <div className="card" key={post.node.id} style={{ marginBottom: 25 }}>
            <div
              className="card-content"
              dangerouslySetInnerHTML={{ __html: post.node.html }}
            />
          </div>
        ))}
      </div>
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
