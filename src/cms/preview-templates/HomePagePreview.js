import React from "react";
import PropTypes from "prop-types";
import { HomePageTemplate } from "../../templates/home-page";

const HomePagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <HomePageTemplate
      intro={data.intro}
      image={getAsset(data.intro.mainImage)}
      about={data.about}
      reviews={data.reviews}
      services={data.servicesBlock}
      animate={false}
      // title={entry.getIn(["data", "title"])}
      // content={widgetFor("body")}

      // subtitle={entry.getIn(["data", "subtitle"])}
      // title={entry.getIn(["data", "title"])}
      // introText={entry.getIn(["data", "introText"])}
      // page={entry.getIn(["data", "page"])}

      // page={{
      //   text_block: {
      //     title: entry.getIn(["data", "page", "text_block", "title"])
      //     title: entry.getIn(["data", "page", "text_block", "clu"])
      //   },
      //   text_block: {
      //     title: entry.getIn(["data", "page", "text_block", "title"])
      //   }
      // }}

      // pricing={{
      //   heading: entry.getIn(['data', 'pricing', 'heading']),
      //   description: entry.getIn(['data', 'pricing', 'description'])
      // }}
      // page={data.page}
    />
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default HomePagePreview;
