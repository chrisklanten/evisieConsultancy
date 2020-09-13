import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

// Import Swiper styles
import "swiper/swiper.scss";

import Layout from "../components/Layout";
import ContactForm from "../pages/contact/index";
import arrowsRight from "../img/arrows-right-4.svg";
import arrowsBottom from "../img/arrows-bottom.svg";

export const HomePageTemplate = ({
  intro,
  about,
  reviews,
  services,
  contact,
}) => (
  <div>
    <section className="flex flex-col sm:flex-row items-stretch relative">
      <img
        src={arrowsRight}
        id="symbol"
        className="left-auto top-auto hidden sm:block z-10"
      />
      <div className="w-full">
        <div className="p-6 ml-auto py-10 sm:py-20 max-w-lg mr-16">
          <h1
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="600"
            className=" max-w-sm"
          >
            {intro.title}
          </h1>
          <p
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease"
            data-sal-duration="600"
            className="pt-2 pb-4"
          >
            {intro.mainText}
          </p>
          <Link
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="600"
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
        />
      </div>
    </section>

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
          minHeight: `200px`,
        }}
      >
        <img
          src={arrowsBottom}
          id="symbol-mobile"
          className="mr-6 block sm:hidden w-32"
        />
      </div>
      <img
        src={arrowsRight}
        id="symbol"
        className="left-auto top-auto hidden sm:block z-10"
      />
      <div className="w-full">
        <div className="p-6 ml-12 py-10 sm:py-20 max-w-lg mr-12">
          <h1 className=" max-w-sm">{about.title}</h1>
          <p className="pt-2 pb-4">{about.mainText}</p>
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
            <SwiperSlide className="swiper-slide rounded-sm review bg-white flex-col justify-center items-center p-8">
              <img
                src={
                  !!review.logo.childImageSharp
                    ? review.logo.childImageSharp.fluid.src
                    : review.logo
                }
                className="reviewLogo h-12 mx-auto"
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

    <section id="contact" className="-mt-6 px-8 sm:px-0 relative">
      <div className="container box-border sm:mx-auto">
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-duration="600"
          className="rounded-sm shadow-md  p-8 sm:p-16 bg-white sm:flex"
        >
          <div className="w-full">
            <h3>{contact.title}</h3>
            <p className="mb-6">{contact.introText}</p>
            <ul>
              <li className="text-black font-bold flex items-center mb-2">
                <FaMapMarkerAlt className="text-evisie-yellow" />
                &nbsp;&nbsp;Pierrestraat 23 6471 KH Eygelshoven
              </li>
              <li className="text-black font-bold flex items-center mb-2">
                <FaPhoneAlt className="text-evisie-yellow" />
                &nbsp;&nbsp;
                <a
                  target="_blank"
                  className="no-underline text-black font-bold flex items-center"
                  href="tel:+31627201455"
                >
                  06 27201455
                </a>
              </li>
              <li className="text-black font-bold mb-2">
                <a
                  target="_blank"
                  className="no-underline text-black font-bold flex items-center"
                  href="https://www.linkedin.com/in/evelien-heckman-8562aa43/"
                >
                  <FaLinkedin className="text-evisie-yellow" />
                  &nbsp;&nbsp;Connect op Linkedin
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
  </div>
);

HomePageTemplate.propTypes = {
  intro: PropTypes.object,
  about: PropTypes.object,
  reviews: PropTypes.object,
  services: PropTypes.object,
  contact: PropTypes.object,
};

const HomePage = ({ data }) => {
  console.log(data);
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HomePageTemplate
        intro={frontmatter.intro}
        about={frontmatter.about}
        reviews={frontmatter.reviews}
        services={frontmatter.servicesBlock}
        contact={frontmatter.contact}
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

// export const pageQuery = graphql`
//   query HomePageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
//       frontmatter {
//         title
//       }
//     }
//   }
// `;

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        intro {
          title
          mainText
          cta
          mainImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
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
              fluid(maxWidth: 2048, quality: 100) {
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
        contact {
          title
          introText
        }
      }
    }
  }
`;
