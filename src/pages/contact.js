import React, { Component } from "react"
import * as emailjs from "emailjs-com"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs"

class Contact extends Component {
  state = {
    success: 1,
  }
  emailContact = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        "gmail",
        "template_LfM5vDIa",
        "#myForm",
        "user_NFpO7vhE39bmGxyv4pEGg"
      )
      .then(
        response => {
          this.setState({ success: 2 })
        },
        err => {
          this.setState({ success: 3 })
        }
      )
  }
  render() {
    if (this.state.success === 2) {
      return (
        <Layout>
          <div className="card-content">
            <Breadcrumbs pagename="Contact" parent={false} />
            <div className="notification is-success">
              <strong>SUCCESS!</strong>
              <p>Your message has been sent!</p>
              <p>
                <Link to="/">Go back</Link>
              </p>
            </div>
          </div>
        </Layout>
      )
    }
    if (this.state.success === 3) {
      return (
        <Layout>
          <div className="card-content">
            <Breadcrumbs pagename="Contact" parent={false} />
            <div className="notification is-danger">
              <strong>UH OH!</strong>
              <p>Something went wrong. Your message was NOT sent</p>
              <p>
                <Link to="/">Go back</Link>
              </p>
            </div>
          </div>
        </Layout>
      )
    }
    return (
      <>
        <Layout>
          <h3 className="break is-uppercase has-text-weight-bold is-size-6 has-text-black">
            Contact Me
          </h3>
          <div className="card-content" style={{ paddingBottom: 0 }}>
            <Breadcrumbs pagename="Contact" parent={false} />
          </div>
          <div className="card-content content">
            <p>
              Want to hire me? Want to know more about me? Want to grab a
              coffee? Send me a message below!
            </p>
            <form
              onSubmit={this.emailContact}
              id="myForm"
              style={{
                padding: 15,
                border: "1px solid #dbdbdb",
                borderRadius: 10,
              }}
            >
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="email_address"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="from_name"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Textarea"
                    name="message_html"
                  ></textarea>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button
                    className="button is-warning"
                    type="submit"
                    style={{ color: "#ffffff" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Layout>
      </>
    )
  }
}

export default Contact
