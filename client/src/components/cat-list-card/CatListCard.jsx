import { Button, PawsDecorate, Title } from "components";
import React from "react";
import "./cat-list-card.css";

const CatListCard = (props) => {
  const { name, age, personality, gender, pictureUrl } = props;

  return (
    <div className="cat-list-card">
      <div
        className="cat-list-card-image"
        style={{
          backgroundImage: `url(${pictureUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="cat-list-card-content">
        <div className="cat-list-card-content-info">
          <Title
            text={name}
            style={{ color: "#FBFBFB", fontSize: "var(--header-size-medium)", letterSpacing: "0.05em", fontWeight: "700" }}
          />
          <div className="cat-list-card-content-info-item">
            <h6 className="cat-list-card-content-info-item-title">Sexo</h6>
            <p className="cat-list-card-content-info-item-text">{gender}</p>
          </div>
          <div className="cat-list-card-content-info-item">
            <h6 className="cat-list-card-content-info-item-title">Edad</h6>
            <p className="cat-list-card-content-info-item-text">{age}</p>
          </div>
          <div className="cat-list-card-content-info-item">
            <h6 className="cat-list-card-content-info-item-title">
              Personalidad
            </h6>
            <p className="cat-list-card-content-info-item-text">
              {personality}
            </p>
          </div>
          <PawsDecorate
            position={"right-top"}
            top="0"
            right="0"
            color="var(--primary-color)"
            opacity="0.5"
          />
        </div>
        <Button text={"Mas información"} style={{ width: "auto" }} />
      </div>
    </div>
  );
};

export default CatListCard;
