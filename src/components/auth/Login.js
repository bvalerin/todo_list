import React from "react";
import "./styles.css";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <form action="">
          <input type="text" name="email" placeholder="&#128231; Email" />
          <input
            type="numbre"
            name="password"
            placeholder="&#128273; Password"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
