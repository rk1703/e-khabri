import React, { useEffect, useState } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const webUrl = `https://api.mediastack.com/v1/news?access_key=747b3776dc22828ea6a8cfd9bbecea9a&countries=in&languages=en&categories=${props.topic}`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    let url = `${webUrl}`;
    let res = await fetch(url);
    props.setProgress(30);
    let parseData = await res.json();
    console.log(parseData)
    props.setProgress(50);
    setArticles(parseData?.data);
    setTotalResults(parseData?.pagination?.total);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setLoading(true);
    let url = `${webUrl}`;
    let res = await fetch(url);
    let parseData = await res.json();

    setArticles(articles.concat(parseData?.data));

    setTotalResults(parseData?.pagination?.total);
    setLoading(false);
    console.log("page", page);
    setPage(page + 1);
  };

  return (
    <>
      <div className="container my-3 mx-auto">
        <div className="mt-4 pt-3">
          <h2
            className={`text-center text-${
              props.mode === "light" ? "Dark" : "light"
            }`}
            style={{ marginTop: "65px" }}
          >
            NEWS-APP: Top {capitalizeFirstLetter(props.topic)} News-Headlines{" "}
          </h2>
        </div>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner mode={props.mode} />}
          className="p-0 overflow-hidden"
        >
          <div className="row container " style={{ width: "fit-content" }}>
            {articles.map((element) => {
              return (
                <div className="col-lg-4 col-md-6" key={element._id}>
                  <Newsitems
                    mode={props.mode}
                    title={element?.title}
                    description={element?.description}
                    imageUrl={element?.image}
                    url={element?.url}
                    author={element?.author}
                    time={element?.published_at}
                    source={element?.source}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  topic: PropTypes.string,
};

News.defaultProps = {
  pageSize: 6,
  country: "in",
  topic: "general",
};

export default News;
