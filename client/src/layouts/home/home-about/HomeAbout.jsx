import { AboutCard, Button, PawsDecorate, Title } from "components";
import React, { useEffect, useState } from "react";
import "./home-about.css";

const HomeAbout = () => {
  const dataSliderAbout = [
    {
      title: "Sobre Nosotros",
      text: "Tito's CAT CAFÉ es un establecimiento para los amantes de los gatos quienes quieren pasar un rato agradable y de juego con ellos, mientras comen variedad de postres y café. El cat café es una idea que surgiö en Taipéi (Taiwän) en 1998 y poco a poco fue cogiendo fama, sobre todo entre los turistas japoneses que, al tener prohibida la tenencia de mascotas en apartamentos residenciales, vieron en ésta una forma de poder disfrutar de la presencia de animales.",
    },
    {
      title: "Nuestra Misión",
      text: "Tito's CAT CAFÉ es un establecimiento para los amantes de los gatos quienes quieren pasar un rato agradable y de juego con ellos, mientras comen variedad de postres y café. El cat café es una idea que surgiö en Taipéi (Taiwän) en 1998 y poco a poco fue cogiendo fama, sobre todo entre los turistas japoneses que, al tener prohibida la tenencia de mascotas en apartamentos residenciales, vieron en ésta una forma de poder disfrutar de la presencia de animales. ",
    },
    {
      title: "Nuestra Vision",
      text: "Tito's CAT CAFÉ es un establecimiento para los amantes de los gatos quienes quieren pasar un rato agradable y de juego con ellos, mientras comen variedad de postres y café. El cat café es una idea que surgiö en Taipéi (Taiwän) en 1998 y poco a poco fue cogiendo fama, sobre todo entre los turistas japoneses que, al tener prohibida la tenencia de mascotas en apartamentos residenciales, vieron en ésta una forma de poder disfrutar de la presencia de animales.",
    },
  ];

  const [position, setPosition] = useState(0);
  const [aboutCurrentSlide, setAboutCurrentSlide] = useState(0);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = (e) => {
      setWindowSize(window.innerWidth);
      handleClick(e, aboutCurrentSlide);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const handleClick = (e, index) => {
    e.preventDefault();
    setPosition(index * windowSize);
    setAboutCurrentSlide(index);
  };

  return (
    <div className="home-about">
      <div className="home-about-content">
        <PawsDecorate top="0px" right="0px" position="right-top" color="var(--primary-color)" />
        <PawsDecorate bottom="0px" left="0px" position="left-bottom" color="var(--primary-color)" />
        <div className="home-about-content-data">
          <div
            className="home-about-content-data-slider"
            style={{ left: `-${position}px` }}
          >
            {dataSliderAbout.map((element, index) => (
              <div className="home-about-content-data-slider-slide">
                <Title
                  style={{ width: "auto", alignItems: "center", color:"var(--black-color)", fontSize: "var(--header-size-large)" }}
                  text={element.title}
                />
                <p className="home-about-content-data-slider-slide-text">
                  {element.text}
                </p>
              </div>
            ))}
          </div>
          <Button text="Conoce mas" type="filled" />
          <div className="home-about-content-data-slider-buttons">
            {dataSliderAbout.map((element, index) => (
              <button
                className="home-about-content-data-slider-buttons-button"
                onClick={(e) => handleClick(e, index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className="home-more-about">
        <AboutCard
          idPattern1="pattern-about-image-1"
          image1="about-image1.png"
          idPattern2="pattern-about-image-2"
          image2="about-image2.png"
          idPattern3="pattern-about-image-3"
          image3="about-image3.png"
          title="El Mejor Ambiente"
          text="Lorem ipsum dolor sit amet consectetur. Ut posuere scelerisque
          faucibus at tortor vitae. Gravida cum diam tortor venenatis ut augue
          cras proin bibendum. Pretium eget ultricies malesuada sit scelerisque
          laoreet porttitor quisque est. Volutpat malesuada a risus nulla tellus
          orci nisi quis vestibulum. Odio augue neque bibendum felis nunc."
        />
        <AboutCard
          idPattern1="pattern-about-image-4"
          image1="about-image4.png"
          idPattern2="pattern-about-image-5"
          image2="about-image5.png"
          idPattern3="pattern-about-image-6"
          image3="about-image6.png"
          title="La Mejor Compañia"
          text="Lorem ipsum dolor sit amet consectetur. Ut posuere scelerisque
          faucibus at tortor vitae. Gravida cum diam tortor venenatis ut augue
          cras proin bibendum. Pretium eget ultricies malesuada sit scelerisque
          laoreet porttitor quisque est. Volutpat malesuada a risus nulla tellus
          orci nisi quis vestibulum. Odio augue neque bibendum felis nunc."
          style={{ flexDirection: "row-reverse" }}
        />
        <AboutCard
          idPattern1="pattern-about-image-7"
          image1="about-image7.png"
          idPattern2="pattern-about-image-8"
          image2="about-image8.png"
          idPattern3="pattern-about-image-9"
          image3="about-image9.png"
          title="Los Mejores Productos"
          text="Lorem ipsum dolor sit amet consectetur. Ut posuere scelerisque
          faucibus at tortor vitae. Gravida cum diam tortor venenatis ut augue
          cras proin bibendum. Pretium eget ultricies malesuada sit scelerisque
          laoreet porttitor quisque est. Volutpat malesuada a risus nulla tellus
          orci nisi quis vestibulum. Odio augue neque bibendum felis nunc."
        />
      </div>
    </div>
  );
};

export default HomeAbout;
