import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import arrowsRight from "../img/arrows-right-white.svg";

export const AboutPageTemplate = ({ title, subtitle, introText, page }) => {
  return (
    <>
      <section className="bg-evisie-gray">
        <div className="container max-w-2xl py-16 px-6 md:px-0">
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
        <div className="container max-w-2xl py-16 px-6 md:px-0">
          {page.map((block) => (
            <div>
              <h2 className="text-black">{block.title}</h2>
              <div>
                {/* {block.columns.map((column) => (
                  <div>{column.text}</div>
                ))} */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  introText: PropTypes.string.isRequired,
  page: PropTypes.array,
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);

  return (
    <Layout>
      <AboutPageTemplate
        subtitle={frontmatter.subtitle}
        title={frontmatter.title}
        introText={frontmatter.introText}
        page={frontmatter.page}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        subtitle
        introText
        page {
          title
          fotos {
            foto {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 95) {
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
