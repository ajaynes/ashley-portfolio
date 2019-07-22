import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query educationquery {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "education" } } }
          sort: { fields: frontmatter___listing, order: DESC }
        ) {
          edges {
            node {
              id
              html
              frontmatter {
                title
                position
                dates
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <h1>Education</h1>
        <div>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <div key={edge.node.id}>
                <h3>{edge.node.frontmatter.title}</h3>
                <div className="title">{edge.node.frontmatter.position}</div>
                <div className="dates">{edge.node.frontmatter.dates}</div>
                <div
                  key={edge.node.id}
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            )
          })}
        </div>
      </header>
    )}
  />
)
