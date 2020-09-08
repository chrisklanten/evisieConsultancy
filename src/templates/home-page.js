import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import ReviewBlock from "../components/ReviewBlock";

export const HomePageTemplate = ({ title }) => (
  <div>
    <h1>{title}</h1>
    {/* <div className="flex">
      <div>
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        ></div>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    <ReviewBlock />
  </div>
);

HomePageTemplate.propTypes = {
  title: PropTypes.string,
};

const HomePage = ({ data }) => {
  console.log(data);
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HomePageTemplate title={frontmatter.title} />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query HomePageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
//       frontmatter {
//         intro {
//           title
//           mainText
//           cta
//           mainImage {
//             childImageSharp {
//               fluid(maxWidth: 2048, quality: 100) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//         servicesBlock {
//           title
//           intro
//           services {
//             title
//             breadtext
//           }
//         }
//         about {
//           title
//           mainText
//           aboutImage {
//             childImageSharp {
//               fluid(maxWidth: 2048, quality: 100) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//         reviews {
//           title
//           reviews {
//             title
//             review
//             name
//             job
//             logo {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
