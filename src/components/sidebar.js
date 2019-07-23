import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"
import logo from "../images/logo2.svg"

export default () => (
  <StaticQuery
    query={graphql`
      query ashley {
        markdownRemark(frontmatter: { type: { eq: "ashley" } }) {
          html
        }
      }
    `}
    render={data => (
      <>
        <img src={logo} alt="Logo" />
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <Navigation />
        <div className="social-media">
          <a href="https://github.com/ajaynes">
            <i className="icon-github-circled" />
          </a>
          <a href="https://www.linkedin.com/in/ashleyjaynes/">
            <i className="icon-linkedin" />
          </a>
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
)
