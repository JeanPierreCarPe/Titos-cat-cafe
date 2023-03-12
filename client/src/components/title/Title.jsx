import React from "react";
import "./title.css";

const Title = (props) => {
  const { style, text } = props;

  return (
    <div className="title" style={style}>
      <h1 style={style}>{text}</h1>
      <hr className="title-horizontal-rule"></hr>
    </div>
  );
};

export default Title;
