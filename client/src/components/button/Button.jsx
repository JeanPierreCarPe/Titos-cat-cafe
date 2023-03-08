import React, { useState } from "react";
import "./button.css";

const Button = (props) => {
    const [hover, setHover] = useState(false);

    const isMouseHover = (e) => {
      setHover(true);
    };
  
    const isMouseOut = (e) => {
      setHover(false);
    };
  
    return (
      <button
        type={props.methodType}
        onMouseOver={(e) => {
          isMouseHover(e);
        }}
        onMouseOut={(e) => {
          isMouseOut(e);
        }}
        className={"button " + props.type}
      >
        {props.text}
        {hover && (
          <img className="button-img" src="assets/images/paw.png" alt="pawImage"></img>
        )}
      </button>
    );
};

export default Button;
