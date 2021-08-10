/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button"

import Header from "./header"
import Sidebar from "./sidebar"
import Download from "./download"
//import "./layout.css"
import "./styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/*<Header siteTitle={data.site.siteMetadata.title} />*/}
      <div className="container">
        <div
          className="columns is-variable is-1-mobile is-2-tablet is-2-desktop is-2-widescreen is-4-fullhd"
          style={{ margin: 0 }}
        >
          <div className="column is-one-third-tablet no-padding">
            <div
              className="card card-margin"
              style={{ position: "sticky", top: 25 }}
            >
              <div className="card-content">
                <Sidebar />
              </div>
            </div>
          </div>
          <div className="column no-padding">
            <div className="card card-margin">
              <main>{children}</main>
              <Download />
            </div>
            <footer className="has-text-centered" style={{marginTop: '15px'}}>
          © {new Date().getFullYear()},{` `}
          <a
            aria-label="Return to current site"
            href="https://ashleyjaynes.com"
          >
            Ashley Jaynes
          </a>
        </footer>
          </div>
        </div>
        <div className="is-hidden-touch">
          <ScrollUpButton />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
