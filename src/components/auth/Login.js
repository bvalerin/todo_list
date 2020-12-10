import React from "react";
import "./login.css";
import email from "../../images/email.svg";
import pass from "../../images/pass.svg";
import logo from "../../images/Logo.svg";
import google from "../../images/google.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <form action="">
          <div className="inputLogin">
            <img src={email} alt="Email" />
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="inputLogin">
            <img src={pass} alt="Password" />
            <input type="password" name="password" placeholder="Password" />
          </div>
        </form>
        <button className="iniciarSesion">Iniciar Sesion</button>
        <button className="iniciarSesionGoogle">
          <img src={google} alt="Google" />
          Iniciar Sesion con Google
        </button>
        <hr className="linea" />
        <p>
          ¿Eres nuevo? <Link to={"/"}>¡Registrate!</Link>
        </p>
        <Link to={"/"} className="olvidasteTuContraseña">
          ¿Olvidaste tu constraseña?
        </Link>
      </div>
    </div>
  );
};

export default Login;
