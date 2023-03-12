import { Button, InputText } from "components";
import React from "react";
import "./register-form.css";

const RegisterForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-form-title">Crea tu cuenta</h3>
      <form action="http://localhost:3001/auth/register" method="post">
        <div className="form-group">
          <InputText
            type={"text"}
            placeholder={"nombre"}
            name={"firstName"}
            style={{ width: "100%" }}
          />
          <InputText
            type={"text"}
            placeholder={"apellido"}
            name={"lastName"}
            style={{ width: "100%" }}
          />
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
          <InputText
            type={"password"}
            placeholder={"confirmar contraseña"}
            name={"confirmPassword"}
            style={{ width: "100%" }}
          />
        </div>
        <Button text={"Ingresar"} style={{ width: "50%" }} />
      </form>
    </div>
  );
};

export default RegisterForm;
