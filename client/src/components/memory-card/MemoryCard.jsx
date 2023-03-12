import { Button } from "components";
import React from "react";
import "./memory-card.css";

const MemoryCard = (props) => {
  const { style, text } = props;
  return (
    <div className="memorie-card" style={style}>
      <div className="memorie-card-content">
        <h3 className="memorie-card-content-title">{text}</h3>
        <Button text="Mirar recuerdo" type="filled"></Button>
      </div>
    </div>
  );
};

export default MemoryCard;
