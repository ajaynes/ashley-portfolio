import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
        <Link to="/">
          <img src={logo} alt="Ashley Jaynes Logo" style={{ width: "100%" }} />
        </Link>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <Navigation />
        <ul
          className="social has-text-centered"
          style={{ marginTop: 15, marginBottom: 15 }}
        >
          <li>
            <a href="https://github.com/ajaynes">
              <i className="icon-github-circled" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/ashleyjaynes/">
              <i className="icon-linkedin" />
            </a>
          </li>
        </ul>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
)
