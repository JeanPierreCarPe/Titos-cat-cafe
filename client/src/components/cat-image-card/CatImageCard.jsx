import React from "react";
import "./cat-image-card.css";

const CatImageCard = (props) => {
  const { id, state, type, imageUrl, text, slideFunction } = props;
  const idCard = `home-cats-content-card-${id}`;

  const showCard = (e) => {
    if (!state) {
      slideFunction(e, id);
    }
  };

  return (
    <div
      id={idCard}
      className={state ? "cat-image-card active" : "cat-image-card"}
      onClick={(e) => showCard(e)}
    >
      <svg
        className={"cat-image-card-paw " + type}
        width="401"
        height="354"
        viewBox="0 0 401 354"
        fill="none"
      >
        <path d="M200.167 135.027C244.061 135.027 298.372 180.72 324.479 249.263C350.63 317.81 317.079 351.032 287.412 353.437C257.736 355.806 226.869 325.823 200.154 325.788C173.447 325.805 142.602 355.801 112.931 353.423C83.2641 351.046 49.7261 317.805 75.824 249.267C101.944 180.707 156.238 135.013 200.167 135.027Z" />
        <path d="M254.621 132.733C226.629 128.302 206.789 106.644 212.58 70.3102C218.38 33.9634 247.567 -3.30796 275.523 1.10984C303.523 5.58986 319.71 50.0701 313.954 86.417C308.141 122.777 282.594 137.186 254.621 132.733V132.733Z" />
        <path d="M308.369 144.785C318.716 111.736 349.916 80.7311 374.054 88.2644C398.165 95.8645 406.059 139.149 395.712 172.198C385.365 205.198 360.641 215.456 336.534 207.883C312.431 200.314 298 177.807 308.374 144.785H308.369Z" />
        <path d="M145.719 132.75C117.719 137.208 92.163 122.772 86.403 86.4211C80.603 50.0742 96.7986 5.58952 124.794 1.13172C152.781 -3.31719 181.986 33.9852 187.759 70.3232C193.528 106.661 173.728 128.297 145.723 132.75H145.719Z" />
        <path d="M26.2704 88.2822C50.4172 80.7266 81.6174 111.745 91.973 144.771C102.355 177.807 87.9285 200.318 63.8262 207.874C39.7061 215.461 14.9993 205.198 4.63031 172.198C-5.75642 139.158 2.16807 95.8378 26.2704 88.2822V88.2822Z" />
      </svg>
      <div
        className="cat-image-card-content"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="cat-image-card-content-title">{text}</h1>
      </div>
    </div>
  );
};

export default CatImageCard;
