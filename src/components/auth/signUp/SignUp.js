import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import email from "../../../images/email.svg";
import pass from "../../../images/pass.svg";
import user from "../../../images/user.svg";
import logo from "../../../images/logo.svg";
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

      <div className="registerContainer">

      <div className="logo">
          <img src={logo} alt="logo" />
      </div>

        <div className="signUpLabel text-center">
          Ingrese su Datos
        </div>

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
