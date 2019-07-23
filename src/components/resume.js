import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query resumequery {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "resume" } } }
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
      <>
        <h3 className="break is-uppercase has-text-weight-bold is-size-6 has-text-black">
          Experience
        </h3>
        <div className="card-content">
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <div key={edge.node.id}>
                <h3 className="is-size-5 has-text-weight-bold has-text-black">
                  {edge.node.frontmatter.position} -{" "}
                  {edge.node.frontmatter.title}
                </h3>
                <div className="dates is-italic">
                  {edge.node.frontmatter.dates}
                </div>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            )
          })}
        </div>
      </>
    )}
  />
)
