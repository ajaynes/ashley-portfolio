import React from "react"
import { Link } from "gatsby"

const Breadcrumbs = props => {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {props.parent === false ? (
          <li className="is-active">
            <a href="#" aria-current="page">
              {props.pagename}
            </a>
          </li>
        ) : (
          <>
            <li>
              <Link to="/portfolio/">Portfolio</Link>
            </li>
            <li className="is-active">
              <a href="#" aria-current="page">
                {props.pagename}
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
