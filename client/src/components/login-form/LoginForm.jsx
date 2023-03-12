import { Button, InputText } from "components";
import React from "react";
import "./login-form.css";

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-form-title">Inicia Sesión</h3>
      <form action="/auth/login" method="get">
        <div className="form-group">
          <InputText
            type={"email"}
            placeholder={"correo electrónico"}
            name={"email"}
            style={{ width: "100%" }}
          />
          <InputText
            type={"password"}
            placeholder={"contraseña"}
            name={"password"}
            style={{ width: "100%" }}
          />
        </div>
        <Button text={"Ingresar"} style={{ width: "50%" }} />
      </form>
      <a className="login-form-link" href="/login">
        Olvidé mi contraseña
      </a>
    </div>
  );
};

export default LoginForm;
