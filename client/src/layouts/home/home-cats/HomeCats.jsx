import { Button, CatImageCard, Title } from "components";
import React, { useEffect, useState } from "react";
import "./home-cats.css";

const HomeCats = (props) => {
  const { navigate } = props;
  const [catsData, setCatsData] = useState([]);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(4);

  useEffect(() => {
    fetch("http://localhost:3001/cats")
      .then((response) => response.json())
      .then((data) => {
        setCatsData(data);
      });
  }, []);

  function HandleClick() {
    navigate("/cats");
  }

  const sliderAction = (e, id) => {
    const actualCard = e.target;
    const parent = actualCard.parentNode;
    const previousCard = parent.previousElementSibling.previousElementSibling;
    const container = actualCard.parentNode.parentNode;
    const firstCard = container.firstChild;
    const lastCard = container.lastChild.previousElementSibling;

    const indexCard = catsData.findIndex((item) => {
      return item.id === id;
    });

    document.getElementById(parent.id).classList.add("active");
    document.getElementById(previousCard.id).classList.remove("active");

    console.log(firstCard);

    if (parent === lastCard) {
      setTimeout(() => {
        setFirst(first + 1);
        setLast(last + 1);
      }, 700);
    }

    // if (parent === firstCard) {
    // }
  };

  return (
    <div className="home-cats">
      <Title
        style={{
          width: "auto",
          alignItems: "center",
          color: "#FBFBFB",
          fontSize: "var(--header-size-large)",
        }}
        text="Nuestros Peluditos"
      />
      <div className="home-cats-content">
        {catsData.slice(first, last).map((element, index) => {
          const isActive = true;
          return (
            <CatImageCard
              key={index}
              id={element._id}
              text={element.name}
              imageUrl={element.pictureUrl}
              state={isActive}
              type={index % 2 === 0 ? "paw-top" : "paw-bottom"}
              slideFunction={sliderAction}
            />
          );
        })}
      </div>
      <Button text="Conocelos a todos" navigate={HandleClick} />
    </div>
  );
};

export default HomeCats;
