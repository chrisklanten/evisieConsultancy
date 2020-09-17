import React from "react";
import PropTypes from "prop-types";
import { ServicesPageTemplate } from "../../templates/services-page";

const ServicesPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <ServicesPageTemplate
      subtitle={data.subtitle}
      title={data.title}
      introText={data.introText}
      page={data.page}
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

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ServicesPagePreview;
