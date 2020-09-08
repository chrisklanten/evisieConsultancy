import { graphql } from "gatsby";

export const ReviewsBlockTemplate = ({ title }) => <div>{title}</div>;

ReviewsBlockTemplate.propTypes = {
  title: PropTypes.string,
};

const ReviewsBlock = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ReviewsBlockTemplate title={frontmatter.title} />
    </Layout>
  );
};

ReviewsBlock.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ReviewsBlock;

export const pageQuery = graphql`
  query ReviewsBlock {
    markdownRemark(frontmatter: { templateKey: { eq: "review-block" } }) {
      frontmatter {
        title
      }
    }
  }
`;
