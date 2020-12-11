import React from "react";
import { useForm } from "../../../hooks/useForm";
import email from "../../../images/email.svg";
import pass from "../../../images/pass.svg";
import user from "../../../images/user.svg";
import "./signUp.css";

const SignUp = () => {
  const [formvalues, getInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const saveRegister = (e) => {
    e.preventDefault();
    console.log(formvalues);
  };
  return (
    <div className="signUp">
      <div className="container">
        {/* <p>Ingrese su Datos</p> */}
        <form onSubmit={saveRegister}>
          <div className="inputLogin">
            <img src={user} alt="user" />
            <input
              type="user"
              name="name"
              placeholder="Nombre"
              onChange={getInputChange}
            />
          </div>
          <div className="inputLogin">
            <img src={email} alt="Email" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={getInputChange}
            />
          </div>
          <div className="inputLogin">
            <img src={pass} alt="Password" />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={getInputChange}
            />
          </div>
          <div className="inputLogin">
            <img src={pass} alt="Password" />
            <input
              type="password"
              name="password2"
              placeholder="Repetir Contraseña"
              onChange={getInputChange}
            />
          </div>
          <button className="iniciarSesion" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
