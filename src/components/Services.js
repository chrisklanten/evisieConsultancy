import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

class Services extends React.Component {
  render() {
    const {
      data: {
        markdownRemark: {
          frontmatter: { servicesBlock: services },
        },
      },
    } = this.props;

    console.log(this.props);

    return (
      <section className="bg-evisie-gray py-10">
        <div className="container text-center">
          <h2>{services.title}</h2>
          <p>{services.introText}</p>
          <div className="flex items-stretch justify-center mt-4 flex-wrap">
            {services.services.map((service, i) => (
              <div
                data-sal="slide-up"
                data-sal-delay={i * 150}
                data-sal-easing="ease"
                data-sal-duration="600"
                className="service bg-white py-6 px-4 flex flex-col mr-4 mb-4 justify-center max-w-xs w-full rounded-sm"
                key={service.title}
              >
                <h3 className="text-evisie-yellow font-bold text-lg">
                  {service.title}
                </h3>
                <p className="text-sm">{service.breadtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

Services.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ServicesQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
          frontmatter {
            servicesBlock {
              title
              introText
              services {
                title
                breadtext
              }
            }
          }
        }
      }
    `}
    render={(data) => <Services data={data} />}
  />
);
