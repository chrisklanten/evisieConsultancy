import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import arrowsRight from "../img/arrows-right-white.svg";
import Contact from "../components/Contact";

export const ServicesPageTemplate = ({ title, subtitle, introText, page }) => {
  return (
    <>
      <section className="bg-evisie-gray">
        <div
          className="container max-w-3xl py-16 px-6 md:px-0"
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-easing="easeOutQuint"
          data-sal-duration="800"
        >
          <span className="uppercase font-bold text-white font-xs">
            {title}
          </span>
          <div className="flex items-baseline">
            <div
              className="mr-2"
              style={{
                backgroundImage: `url(${arrowsRight})`,
                backgroundPosition: `center center`,
                backgroundSize: `18px 23px`,
                minHeight: `23px`,
                minWidth: `18px`,
                marginLeft: `-26px`,
              }}
            ></div>
            <h1 className="mt-2 mb-4">{subtitle}</h1>
          </div>
          <p className="leading-loose">{introText}</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="container max-w-3xl py-16 px-6 md:px-0">
          {page.map((block) => (
            <div>
              <h2 className="text-black">{block.title}</h2>
              <div className="flex">
                {block.columns
                  ? block.columns.map((column, i) => (
                      <div
                        className={
                          i === i.length ? `w-full mb-2` : `w-full mb-2 mr-4`
                        }
                      >
                        {column.text}
                      </div>
                    ))
                  : block.fotos.map((column, i) => (
                      <div
                        className={
                          i === i.length ? `w-full mb-2` : `w-full mb-2 mr-4`
                        }
                        style={{
                          backgroundImage: `url(${
                            !!column.foto.childImageSharp
                              ? column.foto.childImageSharp.fluid.src
                              : column.foto
                          })`,
                          backgroundPosition: `center center`,
                          backgroundSize: `cover`,
                          minHeight: `200px`,
                        }}
                      />
                    ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </>
  );
};

// ServicesPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   introText: PropTypes.string.isRequired,
//   page: PropTypes.array,
// };

const ServicesPage = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;
  //console.log(frontmatter);

  return (
    <Layout>
      <ServicesPageTemplate
      // subtitle={frontmatter.subtitle}
      // title={frontmatter.title}
      // introText={frontmatter.introText}
      // page={frontmatter.page}
      />
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServicesPage;

export const ServicesPageQuery = graphql`
  query ServicesPage {
    markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
      frontmatter {
        title
        subtitle
        introText
        page {
          title
          fotos {
            foto {
              childImageSharp {
                fluid(maxWidth: 750, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          columns {
            text
          }
        }
      }
    }
  }
`;
