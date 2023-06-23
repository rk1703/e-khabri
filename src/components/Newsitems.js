import React from "react";

const Newsitems = (props) => {
  const cardMode = () => {
    if (props.mode === "light") {
      return {
        margin: "0 auto",
        padding: "0",
        backgroundColor: "white",
        color: "black",
      };
    } else if (props.mode === "dark") {
      return {
        margin: "0 auto",
        padding: "0",
        backgroundColor: "#061d22",
        color: "#e2edeb",
      };
    }
  };

  let { title, description, imageUrl, url, author, time, source } = props;

  return (
    <>
      <div className="container" style={{ padding: "0" }}>
        <div className="card my-1" style={cardMode()}>
          <div
            className="container d-flex "
            style={{
              justifyContent: "flex-end",
              padding: "0",
              position: "absolute",
            }}
          >
            <span
              className=" badge rounded-pill bg-danger"
              style={{ whiteSpace: "break-spaces" }}
            >
              {source}
            </span>
          </div>
          <div
            className="container"
            style={{ padding: "0", display: "flex", height: "11em" }}
          >
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg"
              }
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body pb-1">
            <div
              className="container"
              style={{ display: "flex", padding: "0", height: "19rem" }}
            >
              <h5 className="card-title">{title ? title : ""}</h5>
            </div>
            <div
              className="container"
              style={{
                display: "flex",
                height: "6em",
                padding: "0 1em",
                position: "absolute",
                bottom: "9em",
                overflow: "hidden",
                left: "0",
              }}
            >
              <p className="card-text">{description ? description : ""}</p>
            </div>
            <div
              className="container"
              style={{ padding: "0", height: "5em", overflow: "hidden" }}
            >
              <p className="card-text">
                <small className="text-muted">
                  By {author ? author : "Unknown"} on{" "}
                  {new Date(time).toString()}
                </small>
              </p>
            </div>
            <a href={url} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsitems;
