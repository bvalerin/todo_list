import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import logo from "../../../images/logo.svg";
import "./signUp.css";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="registerContainer">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="signUpLabel text-center">Ingrese su Datos</div>

        <SignUpForm />

        <hr className="divider" />
        <div className="login-text">
          <p>
            ¿Ya tienes cuenta?{" "}
            <Link to={"/login"}>
              <span>¡Iniciar Sesion!</span>
            </Link>
          </p>

          <p>
            ¿Home?{" "}
            <Link to={"/home"}>
              <span>¡Ir al Home(Provisional)!</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
