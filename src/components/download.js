import React from "react"
import resume from "../images/Ashley-Jaynes-Resume.pdf"

const Download = () => {
  return (
    <>
      <div className="break-centered" />
      <div className="card-content has-text-centered">
        <a className="button is-danger is-medium" download href={resume}>
          Download My Resume
        </a>
      </div>
    </>
  )
}

export default Download
