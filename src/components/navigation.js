import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <aside className="menu is-uppercase has-text-weight-bold">
      <ul className="menu-list">
        <li>
          <Link to="/" activeClassName="is-active">
            <i className="icon-user" />
            <span className="is-pulled-right">About</span>
          </Link>
        </li>
        {/* <li>
          <Link
            to="/portfolio/"
            activeClassName="is-active"
            partiallyActive={true}
          >
            <i className="icon-camera" />
            <span className="is-pulled-right">Portfolio</span>
          </Link>
        </li> */}
        <li>
          <Link
            to="/contact/"
            activeClassName="is-active"
            partiallyActive={true}
          >
            <i className="icon-mail" />
            <span className="is-pulled-right">Contact</span>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Navigation
