
import React from 'react';

import addIcon from '../../images/button-icons/add.svg';

export const DashboardTask = () => {

    return(
        <div className="dashboardtask__main">

            <div className="dashboard__tasklist-navbar">
                <h4>React & More</h4>
                    <ul className="dashboard__tasklist-navbar-groupicons">
                        <li><i className="fas fa-user-plus"></i></li>
                        <li><i className="far fa-times-circle"></i></li>
                        <li><i className="fas fa-list"></i></li>       
                    </ul>
            </div>
            <div className="dashboard__tasklist-box">
                <div className="dashboard__tasklist-header">
                    <h3>React & More</h3>
                    <div className="dashboard__tasklist-img">
                        <img src={ addIcon } alt="Add Icon" />
                    </div>
                </div>

                <div className="dashboard__tasklist-items">
                    <ul>
                        <li>
                            <i className="far fa-circle"></i>
                            <p>Solucionar error en el código</p>
                        </li>
                        <li className="task-done">
                            <i className="far fa-check-circle"></i>
                            <p>Solucionar error en el código</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="dashboard__tasklist-box">
                <div className="dashboard__tasklist-header dashboard__button-fix">
                    <button
                        className="btn btn-simple"
                    >
                        Detalles
                    </button>

                    <button
                        className="btn btn-simple"
                    >
                        Opciones
                    </button>
                </div>

                <div className="dashboard__tasklist-details-body">

                    <h3>Solucionar error en el código</h3>

                    <div className="dashboard__tasklist-details-content">
                        <form 
                            action="#"
                            className="dashboard__task-form"
                        >
                            <label 
                                name="description"
                            >
                                Descripción:
                            </label>
                            <textarea 
                                name="description" 
                                id="description"
                                placeholder="Escribe tu descripción aquí."
                            ></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
} 