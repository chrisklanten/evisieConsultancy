import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { FaMapMarkerAlt, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import ContactForm from "../pages/contact/index";

class Contact extends React.Component {
  render() {
    const {
      data: {
        markdownRemark: {
          frontmatter: { contact },
        },
      },
    } = this.props;

    return (
      <section id="contact" className="-mt-6 px-8 sm:px-0 relative">
        <div className="container box-border sm:mx-auto">
          <div
            data-sal="slide-up"
            data-sal-delay="50"
            data-sal-easing="ease"
            data-sal-duration="300"
            className="rounded-sm shadow-2xl p-8 sm:p-16 bg-white sm:flex"
          >
            <div className="w-full mr-3">
              <h3>{contact.title}</h3>
              <p className="mb-6">{contact.introText}</p>
              <ul>
                <li className="text-black font-bold flex items-center mb-2">
                  <FaMapMarkerAlt className="text-evisie-yellow mr-3" />
                  Pierrestraat 23 6471 KH Eygelshoven
                </li>
                <li className="text-black font-bold flex items-center mb-2">
                  <FaPhoneAlt className="text-evisie-yellow mr-3" />

                  <a
                    target="_blank"
                    className="no-underline text-black font-bold flex items-center"
                    href="tel:+31627201455"
                    rel="noreferrer"
                  >
                    06 27201455
                  </a>
                </li>
                <li className="text-black font-bold mb-2">
                  <a
                    target="_blank"
                    className="no-underline text-black font-bold flex items-center"
                    href="https://www.linkedin.com/in/evelien-heckman-8562aa43/"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="text-evisie-yellow mr-3" />
                    Connect op Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ContactTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            contact {
              title
              introText
            }
          }
        }
      }
    `}
    render={(data) => <Contact data={data} />}
  />
);
