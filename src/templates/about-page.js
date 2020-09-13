import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({ title, subtitle, introText, page }) => {
  return (
    <section className="bg-evisie-gray">
      <div className="container max-w-lg py-16">
        <h1 className="">{subtitle}</h1>
        <p>{introText}</p>
      </div>
    </section>
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
          columns {
            text
            foto
          }
        }
      }
    }
  }
`;
