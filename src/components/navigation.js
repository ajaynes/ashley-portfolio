import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav>
      <Link to="/" activeClassName="active" className="navlink">
        <i className="icon-user" />
        About
      </Link>
      <Link
        to="/portfolio/"
        activeClassName="active"
        partiallyActive={true}
        className="navlink"
      >
        <i className="icon-camera" />
        Portfolio
      </Link>
      <Link
        to="/contact/"
        activeClassName="active"
        partiallyActive={true}
        className="navlink"
      >
        <i className="icon-mail" />
        Contact
      </Link>
    </nav>
  )
}

export default Navigation
