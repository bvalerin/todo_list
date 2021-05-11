
import React from 'react';
import { Link } from 'react-router-dom';

import circleImage from '../../images/figure-images/circle.svg';
import triangleImage from '../../images/figure-images/triangle.svg';
import hexagonalImage from '../../images/figure-images/hexagonal.svg';
import squareImage from '../../images/figure-images/square.svg';

import lockIcon from '../../images/input-icons/lock.svg';
import messageIcon from '../../images/input-icons/message.svg';

export const LoginScreen = () => {
    return (
        <div className="auth__login">

            <div className="login__box-content">

                <p className="auth__title"> Do Task</p>

                <div className="login__title">
                    <h2>Inicia sesión</h2>

                    <nav className="socialmedia__navbar">
                        <li><i className="fab fa-facebook-square"></i></li>
                        <li><i className="fab fa-google-plus-square"></i></li>
                        <li><i className="fab fa-twitter-square"></i></li>   
                    </nav>
                </div>

                <form className="auth__form">
                    <p>o use su cuenta para ingresar:</p>

                    <div className="input__form-box">
                        <div className="input__img-box">
                            <img src={ messageIcon } alt="Message Icon" />
                        </div>
                        <input 
                            type="text"
                            className="input__auth"
                            placeholder="Mail"
                            name="email" 
                            autoComplete="off"
                        />
                    </div>

                    <div className="input__form-box">
                        <div className="input__img-box">
                            <img src={ lockIcon } alt="Lock Icon" />
                        </div>
                        <input 
                            type="password"
                            className="input__auth"
                            placeholder="Contraseña"
                            name="password" 
                            autoComplete="off"
                        />
                    </div>

                    
                    <Link 
                        className="btn-link"
                        to="/auth/register"
                    >
                        ¿Olvidaste tu contraseña?
                    </Link>

                    <button
                        className="btn btn-primary"
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>

            <div className="login__box-message">
                <h3>¡Hola, amigo/a!</h3>
                <p>Si no tienes cuenta, registrate</p>

                <Link
                    to="/auth/register"
                    className="btn btn-outline btn-outline-primary"
                >
                    Registrarse
                </Link>

                <div className="login__figures">
                    <img src={ circleImage } alt="Circle Icon" />
                    <img src={ circleImage } alt="Circle Icon" />
                    <img src={ triangleImage } alt="Triangle Icon" />
                    <img src={ triangleImage } alt="Triangle Icon" />
                    <img src={ hexagonalImage } alt="Hexagonal Icon" />
                    <img src={ hexagonalImage } alt="Hexagonal Icon" />
                    <img src={ squareImage } alt="Hexagonal Icon" />
                    <img src={ squareImage } alt="Hexagonal Icon" />
                </div>
            </div>

        </div>
    )
}
