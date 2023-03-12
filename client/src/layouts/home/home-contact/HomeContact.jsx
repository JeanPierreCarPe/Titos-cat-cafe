import { Button, PawsDecorate } from "components";
import React from "react";
import "./home-contact.css";

const HomeContact = (props) => {
  return (
    <div className="home-contact">
      <PawsDecorate top="0px" right="0px" position="right-top" color="var(--primary-color)" />
      <PawsDecorate bottom="0px" left="0px" position="left-bottom" color="var(--primary-color)" />
      <h2 className="home-contact-title">
        Mantente al dia de todas nuestras novedades
      </h2>
      <form className="home-contact-form" action="/" method="post">
        <input
          id="email-subscribe"
          type="text"
          name="email-subscribe"
          placeholder="Escribe tu correo aqui"
        />
        <Button text="Suscribirse" type="filled" methodType="submit"></Button>
      </form>
    </div>
  );
};

export default HomeContact;
