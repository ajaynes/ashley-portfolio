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
      <>
        <h3 className="break is-uppercase has-text-weight-bold is-size-6 has-text-black">
          Education
        </h3>
        <div className="card-content">
          <div className="timeline education">
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <div key={edge.node.id} className="entry">
                  <h3 className="is-size-5 has-text-weight-bold has-text-black">
                    {edge.node.frontmatter.position} -{" "}
                    {edge.node.frontmatter.title}
                  </h3>
                  <div className="dates has-text-weight-light">
                    {edge.node.frontmatter.dates}
                  </div>
                  <div
                    key={edge.node.id}
                    dangerouslySetInnerHTML={{ __html: edge.node.html }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </>
    )}
  />
)
