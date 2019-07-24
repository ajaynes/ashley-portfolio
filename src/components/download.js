import React from "react"

const Download = () => {
  return (
    <>
      <div className="break-centered" />
      <div className="card-content has-text-centered">
        <a
          className="button is-danger is-medium"
          download
          href="resume2019.pdf"
        >
          Download My Resume
        </a>
      </div>
    </>
  )
}

export default Download
