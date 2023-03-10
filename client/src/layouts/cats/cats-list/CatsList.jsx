import { CatListCard } from "components";
import React, { useEffect, useState } from "react";
import "./cats-list.css";

const CatsList = () => {
  const [catsData, setCatsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cats")
      .then((response) => response.json())
      .then((data) => {
        setCatsData(data);
      });
  }, []);

  return (
    <div className="cats-list">
      <h1 className="cats-list-title">
        Un monton de <span>GATOS</span>, un monton de <span>AMOR</span>
      </h1>
      <div className="cats-list-content">
        {catsData.map((element, index) => {
          return (
            <CatListCard
              key={`cat-${index}`}
              name={element.name}
              age="5 años"
              personality="Cariñoso"
              gender="Macho"
              pictureUrl={element.pictureUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CatsList;
