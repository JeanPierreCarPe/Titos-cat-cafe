import React from "react";
import "./title.css";

const Title = (props) => {
  const { style, color, text } = props;

  return (
    <div className="title" style={style}>
      <h2 style={{ color: `${color}` }}>{text}</h2>
      <hr className="title-horizontal-rule"></hr>
    </div>
  );
};

export default Title;
