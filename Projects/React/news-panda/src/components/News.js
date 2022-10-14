import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Loading from "./Loading";


const News = ({API_KEY,country,pagesize,category,updateProgress}) => {
  return (
    <>

      News
    </>
  )
}

News.defaultProps = {
  country: "in",
  pagesize: 9,
  category: "general"
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News