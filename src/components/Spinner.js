import React from "react";
import loadingDark from "./ajax-loader-dark.gif";
import loadingLight from "./ajax-loader-light.gif";

const Spinner = (props) => {
  const spinStyle = {
    justifyContent: "center",
    textAlign: "center",
  };
  const loading = () => {
    if (props.mode === "light") {
      return loadingLight;
    } else if (props.mode === "dark") {
      return loadingDark;
    }
  };
  return (
    <div className="text-center d-flex " style={spinStyle}>
      <img src={loading()} alt="Loading" />
    </div>
  );
};

export default Spinner;
