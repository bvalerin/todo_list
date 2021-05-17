
import React from 'react';

import { TaskList } from '../task/TaskList';


import userImg from '../../images/test-images/perfil.svg';
import addIcon from '../../images/button-icons/add.svg';

export const Sidebar = () => {
    return (
        <aside className="sidebar__main">
            <div className="sidebar__user">
                <div className="sidebar__user-img">
                    <img src={ userImg } alt="Perfil" />
                </div>

                <div className="sidebar__user-content text-center">
                    <h3>Arian Cordoba</h3>
                    <p>correo@correo.com</p>
                </div>
            </div>

            <div className="sidebar__add-button-box text-center">
                <button
                    className="btn btn-quaternary"
                >
                    <img src={ addIcon } alt="Add Icon" />
                    Nuevo Espacio
                </button>
            </div>

            <TaskList />

            <div className="siderbar__btnLogout-box">
                <button
                    className="btn btn-simple"
                >
                    Cerrar Sesión
                </button>

                <div className="sidebar__version-box">
                    <p>v1.0.0</p>
                </div>
            </div>

        </aside>
    )
}
