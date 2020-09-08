import React from "react";
import logo from "../img/logo.svg";
import Layout from "../components/Layout";

export const IndexPageTemplate = () => (
  <div className="flex justify-center items-center h-screen">
    <img src={logo} alt="Evisie Consultancy" style={{ width: "197px" }} />
  </div>
);

const IndexPage = ({ data }) => {
  console.log(data);
  const { frontmatter } = data.index;

  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    reviews: markdownRemark(
      frontmatter: { templateKey: { eq: "review-block" } }
    ) {
      frontmatter {
        title
      }
    }
    index: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        mainImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainText
        cta
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }

`;
