
import React from 'react';
import { Link } from 'react-router-dom';

import circleImage from '../../images/figure-images-register/circle.svg';
import triangleImage from '../../images/figure-images-register/triangle.svg';
import hexagonalImage from '../../images/figure-images-register/hexagonal.svg';
import squareImage from '../../images/figure-images-register/square.svg';

import lockIcon from '../../images/input-icons/lock.svg';
import messageIcon from '../../images/input-icons/message.svg';
import profileIcon from '../../images/input-icons/profile.svg';

export const RegisterScreen = () => {
    return (
        <div className="auth__login auth__login-register">

            <div className="login__box-content">

                <div className="login__title register__title">
                    <h2>Crea una Cuenta</h2>

                    <nav className="socialmedia__navbar">
                        <li><i className="fab fa-facebook-square"></i></li>
                        <li><i className="fab fa-google-plus-square"></i></li>
                        <li><i className="fab fa-twitter-square"></i></li>   
                    </nav>
                </div>

                <form className="auth__form">
                    <p>o use su email para registrarse:</p>

                    <div className="input__form-box">
                        <div className="input__img-box">
                        <img src={ profileIcon } alt="Profile Icon" />
                        </div>
                        <input 
                            type="text"
                            className="input__auth"
                            placeholder="Nombre"
                            name="name" 
                            autoComplete="off"
                        />
                    </div>

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

                    <button
                        className="btn btn-secondary"
                    >
                        Registrarse
                    </button>
                </form>
            </div>

            <div className="login__box-message register__box-message">

                <p className="auth__title auth__title-register"> Do Task</p>

                <div className="login__box-message-content">
                    <h3>¡Hola de Nuevo!</h3>
                    <p className="text-center">Si ya tienes una cuenta, inicia sesión para mantenerte conectado con nosotros.</p>

                    <Link
                        to="/auth/login"
                        className="btn btn-outline btn-outline-secondary"
                    >
                        Inicia Sesión
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

        </div>
    )
}
