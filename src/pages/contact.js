import React, { Component } from "react"
import * as emailjs from "emailjs-com"
import Layout from "../components/layout"

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
          console.log("SUCCESS!", response.status, response.text)
          this.setState({ success: 2 })
        },
        err => {
          console.log("FAILED...", err)
          this.setState({ success: 3 })
        }
      )
  }
  render() {
    if (this.state.success === 2) {
      return (
        <Layout>
          <div className="card-content">
            <div class="notification is-success">
              <strong>SUCCESS!</strong>
              <p>Your message has been sent!</p>
            </div>
          </div>
        </Layout>
      )
    }
    if (this.state.success === 3) {
      return (
        <Layout>
          <div className="card-content">
            <div class="notification is-danger">
              <strong>UH OH!</strong>
              <p>Something went wrong. Your message was NOT sent</p>
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
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    name="email_address"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    name="from_name"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    placeholder="Textarea"
                    name="message_html"
                  ></textarea>
                </div>
              </div>

              <div className="field">
                <div class="control">
                  <button
                    class="button is-warning"
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
