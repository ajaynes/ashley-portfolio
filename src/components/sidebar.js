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
            <a
              href="https://github.com/ajaynes"
              aria-label="View my GitHub profile"
            >
              <i className="icon-github-circled" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/ashleyjaynes/"
              aria-label="View my LinkedIn profile"
            >
              <i className="icon-linkedin" />
            </a>
          </li>
        </ul>
      </>
    )}
  />
)
