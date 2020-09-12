import React from "react";
import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <section className="section">
        <div className="content">
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div className="field mb-2 w-full">
              <label className="label" htmlFor={"name"}>
                Naam
              </label>
              <div className="control w-full">
                <input
                  className="input px-4 py-2 border-2 rounded w-full border-evisie-gray"
                  type={"text"}
                  name={"name"}
                  onChange={this.handleChange}
                  id={"name"}
                  required={true}
                />
              </div>
            </div>
            <div className="field mb-2 w-full">
              <label className="label" htmlFor={"email"}>
                Email
              </label>
              <div className="control">
                <input
                  className="input px-4 py-2 border-2 rounded w-full border-evisie-gray"
                  type={"email"}
                  name={"email"}
                  onChange={this.handleChange}
                  id={"email"}
                  required={true}
                />
              </div>
            </div>
            <div className="field mb-2 w-full">
              <label className="label" htmlFor={"message"}>
                Bericht
              </label>
              <div className="control">
                <textarea
                  className="textarea px-4 py-2 border-2 rounded w-full border-evisie-gray"
                  name={"message"}
                  onChange={this.handleChange}
                  id={"message"}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <button
                className="rounded-sm transition ease-linear duration-200 inline-block py-3 px-8  button is-link bg-evisie-yellow hover:bg-evisie-yellow-100 font-bold text-white w-full"
                type="submit"
              >
                Verstuur
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
