import { Button, Title } from "components";
import React from "react";
import "./about-card.css";

const AboutCard = (props) => {
  const {
    idPattern1,
    idPattern2,
    idPattern3,
    image1,
    image2,
    image3,
    title,
    alignItems,
    style,
    text,
  } = props;

  return (
    <div className="about-card" style={style}>
      <div className="about-card-content">
        <Title
          style={{ color:"var(--white-color)", fontSize: "var(--header-size-large)", rowGap: "15px" }}
          text={title}
        />
        <p className="about-card-content-text">{text}</p>
        <Button text="Leer mas"></Button>
      </div>
      <div className="about-card-images">
        <svg
          className="about-card-images-svg"
          width="283"
          height="231"
          viewBox="0 0 283 231"
          fill="none"
        >
          <defs>
            <pattern
              id={idPattern1}
              patternUnits="objectBoundingBox"
              width="100%"
              height="100%"
            >
              <image
                className="about-card-images-svg-image"
                height="125%"
                xlinkHref={`assets/images/${image1}`}
              />
            </pattern>
          </defs>
          <path
            d="M141.708 230.451C95.4233 230.451 38.1528 182.267 10.6236 109.99C-16.9525 37.7086 18.4268 2.67605 49.71 0.140592C81.0026 -2.35738 113.551 29.2586 141.722 29.2961C169.884 29.2773 202.41 -2.35269 233.697 0.154652C264.981 2.66199 300.346 37.7132 272.826 109.986C245.283 182.281 188.031 230.465 141.708 230.451Z"
            fill={`url(#${idPattern1})`}
          />
        </svg>
        <svg
          className="about-card-images-svg"
          width="268"
          height="269"
          viewBox="0 0 268 269"
          fill="none"
        >
          <defs>
            <pattern
              id={idPattern2}
              patternUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image
                className="about-card-images-svg-image"
                height="100%"
                xlinkHref={`assets/images/${image2}`}
              />
            </pattern>
          </defs>
          <path
            d="M239.687 28.6682C272.415 61.3967 278.841 135.964 247.199 206.537C215.588 277.148 165.799 276.902 141.886 256.575C117.992 236.214 117.333 190.843 97.439 170.896C77.5123 150.996 32.1478 150.363 11.7968 126.466C-8.55077 102.572 -8.7728 52.7805 61.791 21.1356C132.388 -10.5092 206.942 -4.09674 239.687 28.6682Z"
            fill={`url(#${idPattern2})`}
          />
        </svg>
        <svg
          className="about-card-images-svg"
          width="269"
          height="269"
          viewBox="0 0 269 269"
          fill="none"
        >
          <defs>
            <pattern
              id={idPattern3}
              patternUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image
                className="about-card-images-svg-image"
                height="100%"
                xlinkHref={`assets/images/${image3}`}
              />
            </pattern>
          </defs>
          <path
            d="M28.8464 28.5418C61.5749 -4.18668 136.142 -10.6124 206.716 21.0291C277.326 52.6408 277.081 102.43 256.753 126.343C236.392 150.236 191.021 150.896 171.074 170.79C151.174 190.716 150.541 236.081 126.644 256.432C102.751 276.779 52.9587 277.001 21.3139 206.438C-10.331 135.841 -3.91851 61.2869 28.8464 28.5418Z"
            fill={`url(#${idPattern3})`}
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutCard;
