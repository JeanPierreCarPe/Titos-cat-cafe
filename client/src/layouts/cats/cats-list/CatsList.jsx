import { CatListCard } from "components";
import { useFetch } from "hooks/useFetch";
import React from "react";
import "./cats-list.css";

const CatsList = () => {
  
  const { data, loading } = useFetch("http://localhost:3001/cats");

  return (
    <div className="cats-list">
      <h1 className="cats-list-title">
        Un monton de <span>GATOS</span>, un monton de <span>AMOR</span>
      </h1>
      <div className="cats-list-content">
        {loading && <h2>Cargando...</h2>}
        {data?.map((element, index) => {
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
