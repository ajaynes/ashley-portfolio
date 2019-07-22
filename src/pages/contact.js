import React, { Component } from "react"
import * as emailjs from "emailjs-com"

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
        <div style={{ paddingLeft: 40, paddingRight: 40 }}>
          <div>Success!</div>
          <div>Your message has been sent!</div>
        </div>
      )
    }
    if (this.state.success === 3) {
      return (
        <div style={{ paddingLeft: 40, paddingRight: 40 }}>
          <div>Uh Oh!</div>
          <div>Something went wrong :(. Try again.</div>
        </div>
      )
    }
    return (
      <>
        <form
          onSubmit={this.emailContact}
          id="myForm"
          style={{
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          <input type="email" name="email_address" placeholder="Email" />
          <input type="text" name="from_name" placeholder="Name" />
          <textarea name="message_html" rows="4" cols="50" />
          <button type="primary" type="submit" size="large">
            Send Your Message
          </button>
        </form>
      </>
    )
  }
}

export default Contact
