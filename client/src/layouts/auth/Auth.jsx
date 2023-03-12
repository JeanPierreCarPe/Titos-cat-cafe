import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, InputText, LoginForm, RegisterForm } from "components";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const Auth = (props) => {
  const { type } = props;
  const navigate = useNavigate();
  return (
    <div className="authentication-page">
      <div className="authentication-page-content">
        <a className="authentication-page-content-back-button" href="/">
          <FontAwesomeIcon icon={faCircleArrowLeft} />
          Página de inicio
        </a>
        <div className="authentication-page-content-form">
          <img
            className="authentication-page-logo"
            src="assets/images/logo.png"
            alt=""
          ></img>
          {type === "login" && <LoginForm />}
          {type === "register" && <RegisterForm />}
          {type === "login" && (
            <p className="authentication-page-content-link">
              ¿Aun no tienes una cuenta?{" "}
              <a href="/register">Crea tu cuenta aquí</a>
            </p>
          )}
          {type === "register" && (
            <p className="authentication-page-content-link">
              ¿Ya tiene una cuenta?{" "}
              <a href="/login">Ingresa aquí</a>
            </p>
          )}
        </div>
      </div>
      <div className="authentication-page-image"></div>
    </div>
  );
};

export default Auth;
