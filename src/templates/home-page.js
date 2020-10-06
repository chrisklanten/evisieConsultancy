import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import slugify from "react-slugify";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

import Layout from "../components/Layout";
import arrowsRight from "../img/arrows-right-4.svg";
import arrowsBottom from "../img/arrows-bottom.svg";
import Contact from "../components/Contact";
import MarkdownContent from "../components/MarkdownContent";

export const HomePageTemplate = ({
  intro,
  about,
  reviews,
  services,
  animate = true,
}) => (
  <div>
    <section className="flex flex-col sm:flex-row items-stretch relative">
      <img
        src={arrowsRight}
        id="symbol"
        className="left-auto top-auto hidden sm:block z-10"
        alt=""
      />
      <div className="w-full">
        <div className="p-6 ml-auto py-10 sm:py-20 max-w-lg mr-0 sm:mr-16">
          <h1
            data-sal={animate ? "slide-up" : ""}
            data-sal-delay={animate ? "300" : ""}
            data-sal-easing={animate ? "ease" : ""}
            data-sal-duration={animate ? "600" : ""}
            className=" max-w-sm"
          >
            {intro.title}
          </h1>
          <p
            data-sal={animate ? "slide-up" : ""}
            data-sal-delay={animate ? "400" : ""}
            data-sal-easing={animate ? "ease" : ""}
            data-sal-duration={animate ? "600" : ""}
            className="pt-2 pb-4"
          >
            {intro.mainText}
          </p>
          <Link
            data-sal={animate ? "slide-up" : ""}
            data-sal-delay={animate ? "500" : ""}
            data-sal-easing={animate ? "ease" : ""}
            data-sal-duration={animate ? "600" : ""}
            to="/#contact"
            className="rounded-sm transition ease-linear duration-200 inline-block py-3 px-8 text-white font-bold bg-evisie-yellow hover:bg-evisie-yellow-100 no-underline"
          >
            {intro.cta}
          </Link>
        </div>
      </div>
      <div
        className="w-full sm:min-h-0 relative"
        style={{
          backgroundImage: `url(${
            !!intro.mainImage.childImageSharp
              ? intro.mainImage.childImageSharp.fluid.src
              : intro.mainImage
          })`,
          backgroundPosition: `center center`,
          backgroundSize: `cover`,
          minHeight: `200px`,
        }}
      >
        <img
          src={arrowsBottom}
          id="symbol-mobile"
          className="mr-6 block sm:hidden w-32"
          alt=""
        />
      </div>
    </section>

    <section className="bg-evisie-gray py-10">
      <div className="container text-center">
        <h2>{services.title}</h2>
        <p className="px-4">{services.introText}</p>
        <div className="flex items-stretch justify-center mt-4 flex-wrap">
          {services.services.map((service, i) => (
            <div
              data-sal={animate ? "slide-up" : ""}
              data-sal-delay={animate ? i * 150 : ""}
              data-sal-easing={animate ? "ease" : ""}
              data-sal-duration={animate ? "600" : ""}
              key={service.title}
              className="flex items-stretch mx-2 mb-4"
            >
              <div className="service h-full relative bg-white py-6 px-4 flex flex-col justify-center max-w-xs w-full rounded-sm hover:shadow-2xl hover:-translate-y-1 hover:transform cursor-pointer transition duration-150 ease-linear delay-0 transform ">
                <Link
                  to={`/diensten/#${slugify(service.title)}`}
                  className="absolute w-full h-full top-0 left-0"
                ></Link>
                <h3 className="text-evisie-yellow font-bold text-lg mt-0">
                  {service.title}
                </h3>
                <p className="text-sm">{service.breadtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="flex flex-col sm:flex-row items-stretch relative">
      <div
        className="w-full sm:min-h-0 relative"
        style={{
          backgroundImage: `url(${
            !!about.aboutImage.childImageSharp
              ? about.aboutImage.childImageSharp.fluid.src
              : about.aboutImage
          })`,
          backgroundPosition: `center center`,
          backgroundSize: `cover`,
          minHeight: `400px`,
        }}
      >
        <img
          src={arrowsBottom}
          id="symbol-mobile"
          className="mr-6 block sm:hidden w-32"
          alt=""
        />
      </div>
      <img
        src={arrowsRight}
        id="symbol"
        className="left-auto top-auto hidden sm:block z-10"
        alt=""
      />
      <div className="w-full">
        <div className="p-6 ml-12 py-10 sm:py-20 max-w-lg mr-12">
          <h1 className=" max-w-sm">{about.title}</h1>
          <MarkdownContent content={about.mainText} className="pt-2 pb-4" />
        </div>
      </div>
    </section>

    <section className="bg-evisie-yellow py-8 sm:p-16 text-center pb-16 sm:pb-24">
      <h2 className="mx-auto max-w-sm text-center mb-12 text-white">
        {reviews.title}
      </h2>
      <div className="flex justify-center items-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={"auto"}
          initialSlide={1}
          updateOnWindowResize={true}
          centeredSlides={true}
        >
          {reviews.reviews.map((review, i) => (
            <SwiperSlide
              key={i}
              className="swiper-slide rounded-sm review bg-white flex flex-col justify-center items-center p-8"
            >
              <img
                src={
                  !!review.logo.childImageSharp
                    ? review.logo.childImageSharp.fluid.src
                    : review.logo
                }
                className="reviewLogo h-12 mx-auto"
                alt={review.name}
              />
              <p className="py-8 text-sm">{review.review}</p>

              <div
                className={
                  i === 0
                    ? "h-1 bg-evisie-black w-24 mx-auto"
                    : i === 1
                    ? "h-1 bg-evisie-yellow w-24 mx-auto"
                    : "h-1 bg-evisie-gray w-24 mx-auto"
                }
              ></div>
              <p className="mt-8 text-lg">{review.name}</p>
              <p className="text-evisie-yellow text-sm">{review.job}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    <Contact />
  </div>
);

HomePageTemplate.propTypes = {
  intro: PropTypes.object,
  about: PropTypes.object,
  reviews: PropTypes.object,
  services: PropTypes.object,
};

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HomePageTemplate
        intro={frontmatter.intro}
        about={frontmatter.about}
        reviews={frontmatter.reviews}
        services={frontmatter.servicesBlock}
      />
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
  query HomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        intro {
          title
          mainText
          cta
          mainImage {
            childImageSharp {
              fluid(maxWidth: 950, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        servicesBlock {
          title
          introText
          services {
            title
            breadtext
          }
        }
        about {
          title
          mainText
          aboutImage {
            childImageSharp {
              fluid(maxWidth: 950, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        reviews {
          title
          reviews {
            title
            review
            name
            job
            logo {
              childImageSharp {
                fluid(maxWidth: 240, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
