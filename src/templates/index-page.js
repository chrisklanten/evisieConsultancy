import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import logo from "../img/logo.svg";

export const IndexPageTemplate = () => (
  <div className="flex justify-center items-center h-screen">
    <img src={logo} alt="Evisie Consultancy" style={{ width: "197px" }} />
  </div>
);

// IndexPageTemplate.propTypes = {
// 	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
// 	title: PropTypes.string,
// 	heading: PropTypes.string,
// 	subheading: PropTypes.string,
// 	mainpitch: PropTypes.object,
// 	description: PropTypes.string,
// 	intro: PropTypes.shape({
// 		blurbs: PropTypes.array,
// 	}),
// };

const IndexPage = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    // <Layout>
    <IndexPageTemplate
    // image={frontmatter.image}
    // title={frontmatter.title}
    // heading={frontmatter.heading}
    // subheading={frontmatter.subheading}
    // mainpitch={frontmatter.mainpitch}
    // description={frontmatter.description}
    // intro={frontmatter.intro}
    />
    // </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
