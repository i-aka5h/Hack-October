import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import ServerNotFound from "./ServerNotFound";
import NoReasultsAvailable from "./NoReasultsAvailable";

const SearchNews = ({ query, API_KEY, pagesize, updateProgress }) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  query = query.trim();

  const [serverNotFound, setServerNotFound] = useState(false);

  const loadNews = async () => {
    updateProgress(15);
    const url = `https://newsapi.org/v2/top-headlines?&q=${query}&apiKey=${API_KEY}&page=${page}&pagesize=${pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    updateProgress(40);
    if (data.status === 429) {
      setTotalResults(0);
      setLoading(false);
      setServerNotFound(true);
    } else {
      let parsedData = await data.json();
      updateProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    }
    updateProgress(100);
  };

  useEffect(() => {
    document.title = `NewsPanda - ${capitalize(query.trim())}`;
    loadNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?&q=${query}&apiKey=${API_KEY
      }&page=${page + 1}&pagesize=${pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      {serverNotFound ? (
        <ServerNotFound/>
      ) : (
        <div className="container my-8">
          <h2 className="text-center my-4">
            NewsPanda - Top Headlines Related to {query.toUpperCase()}
          </h2>
          {loading && <Loading />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Loading />}
          >
            {
              <div className="container">
                <div className="row p-2">
                  {!loading && totalResults < 1 ? (
                   <NoReasultsAvailable query={query}/>
                  ) : (
                    articles.map((element) => {
                      return (
                        <div className="col-md-4 p-2" key={element.url}>
                          <NewsItem
                            Item
                            title={element.title}
                            description={element.description}
                            urlToImage={element.urlToImage}
                            newsurl={element.url}
                            author={element.author}
                            date={element.publishedAt}
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            }
          </InfiniteScroll>
        </div>
      )}
    </>
  );
};

SearchNews.defaultProps = {
  pagesize: 12,
  query: "",
  newsType: "top",
};
SearchNews.propTypes = {
  pagesize: PropTypes.number,
  query: PropTypes.string,
  newsType: PropTypes.string,
};
export default SearchNews;
