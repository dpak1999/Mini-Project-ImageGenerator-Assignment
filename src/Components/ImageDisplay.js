import React from "react";
import Loader from "./Loader";

const ImageDisplay = (props) => {
  return (
    <div>
      <h1>Here is your Image</h1>
      {!props.image ? <Loader /> : <img src={props.image} alt="oops" />}
    </div>
  );
};

export default ImageDisplay;
