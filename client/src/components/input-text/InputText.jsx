import React from "react";
import "./input-text.css";

const InputText = (props) => {
  const { type, placeholder, style, name } = props;
  return (
    <div className="input-text" style={style}>
      <input
        className="input-text-box"
        type={type}
        placeholder={placeholder}
        name={name}
      />
      <hr className="input-horizontal-rule"></hr>
    </div>
  );
};

export default InputText;
