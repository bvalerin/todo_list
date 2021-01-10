import React, { useEffect } from "react";
import "./login.css";
import email from "../../images/email.svg";
import pass from "../../images/pass.svg";
import logo from "../../images/logo.svg";
import google from "../../images/google.svg";
import Loader from "react-loader-spinner";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { withSnackbar } from "notistack";

import axios from "axios";

const Login = (props) => {
  // React.useEffect(() => {
  //   axios({
  //     url: "https://react-todo-app.hasura.app/v1/graphql",
  //     method: "post",
  //     data: {
  //       query: `
  //            query all_user {
  //             user {
  //               id
  //               name
  //               email
  //             }
  //           }`,
  //     },
  //   }).then((result) => {
  //     console.log(result.data);
  //   });
  // });
  const [formvalues, getInputChange] = useForm({
    email: "",
    password: "",
  });

  const [authenticated, setAuthenticated] = React.useState(false);

  const handlerLogin = (e) => {
    e.preventDefault();
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formvalues.email)) props.enqueueSnackbar("Correo electronico invalido", { variant: "error" });
    else {
      setAuthenticated(true);
      setTimeout(() => {
        props.enqueueSnackbar("Inicio de sesión exitoso", { variant: "success" });
        props.history.push(`/home`);
      }, 1500);
    }
  };

  const handleLoginGoogle = () => {
    props.enqueueSnackbar("Aun no se tiene login con Google", {
      variant: "warning",
    });
  };
  
  return (
    <div className="login">
      <div className="containerLogin">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <form onSubmit={handlerLogin}>
            <div className="inputLogin">
              <img src={email} alt="Email" />
              <input type="email" name="email" placeholder="Email" onChange={getInputChange} />
            </div>
            <div className="inputLogin">
              <img src={pass} alt="Password" />
              <input type="password" name="password" minLength={6} placeholder="Password" required onChange={getInputChange} />
            </div>

            <div className="actionButtons">
              <button className="iniciarSesion">{authenticated ? <Loader type="Grid" color="#1B2631" height={25} width={25} /> : "Iniciar Sesión"}</button>
            </div>
          </form>

          <button className="iniciarSesionGoogle" onClick={handleLoginGoogle}>
            <img src={google} alt="Google" />
            Iniciar con Google
          </button>
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
        </div>

      </div>
    </div>
  );
};

export default withSnackbar(Login);
