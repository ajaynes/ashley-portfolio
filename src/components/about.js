import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query about {
        markdownRemark(frontmatter: { type: { eq: "about" } }) {
          html
          frontmatter {
            subtitle
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <h3 className="break is-uppercase has-text-weight-bold is-size-6 has-text-black">
          Who am I?
        </h3>
        <div className="card-content">
          <div className="content">
            <h1 className="title is-uppercase has-text-black">
              {data.markdownRemark.frontmatter.title}
            </h1>
            <h2
              className="subtitle is-uppercase has-text-weight-normal is-size-6"
              style={{ marginBottom: 15 }}
            >
              {data.markdownRemark.frontmatter.subtitle}
            </h2>
            <div
              className="column-text"
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html,
              }}
            />
          </div>
        </div>
      </>
    )}
  />
)
