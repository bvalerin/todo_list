import React, { useEffect } from "react";
import "./login.css";
import logo from "../../images/logo.svg";
import email from "../../images/email.svg";
import pass from "../../images/pass.svg";
import google from "../../images/google.svg";
import { Link } from "react-router-dom";

import axios from "axios";

const Login = () => {
  useEffect(() => {
    axios({
      url: "https://react-todo-app.hasura.app/v1/graphql",
      method: "post",
      data: {
        query: `
             query all_user {
              user {
                id
                name
                email
              }
            }`,
      },
    }).then((result) => {
      console.log(result.data);
    });
  });
  return (
    <div className="login">
      <div className="containerLogin">
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
          <div className="actionButtons">
            <button className="iniciarSesion">
              <Link to={"/home"}>Iniciar Sesion</Link>
            </button>
            <button className="iniciarSesionGoogle">
              <img src={google} alt="Google" />
              Iniciar Sesion con Google
            </button>
          </div>
          <hr className="divider" />
          <div className="login-text">
            <p>
              ¿Eres nuevo?{" "}
              <Link to={"/register"}>
                <span>¡Registrate!</span>
              </Link>
            </p>
            <Link to={"/"}>¿Olvidaste tu constraseña?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
