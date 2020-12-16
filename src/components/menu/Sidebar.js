<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div>
      <h2>
        Hola
      </h2>
    </div>
=======
=======
>>>>>>> parent of 7979caf... Se terminó el diseño con los estilos CSS del sidebar
=======
>>>>>>> parent of 7979caf... Se terminó el diseño con los estilos CSS del sidebar
import React, { useState } from "react";
import "./Sidebar.css";
import user from "../../images/user.svg";
import perfil from "../../images/perfil.jpg"

import TaskList from "../TaskList";
import WorkSpace from "../WorkSpace";

const Sidebar = () => {
  /* const [taskLists, setTaskList] = useState([
    {
      idTaskList: "1",
      title: "TodoList"
    },
    {
      idTaskList: "2",
      title: "Proyecto Restaurante"
    },
    {
      idTaskList: "3",
      title: "Sistema de licencias"
    },
  ]); */
  const [workSpaces, setWorkSpace] = useState([
    {
      idWorkSpace: 1,
      title: "Mi lista de tareas"
    },
    {
      idWorkSpace: 2,
      title: "Proyecto Restaurant"
    },
    {
      idWorkSpace: 3,
      title: "Escuela"
    },
  ]);
  return (
    <>
      <div className="sidebar">

        <div className="sidebar__header">
          <img src={perfil} alt="Imagen de Usuario" />
          <div className="sidebar__user-info">
            <p>Arian Cordoba Suarez</p>
            <small>arian.gasolero@gmail.com</small>
          </div>
        </div>
        <div className="sidebar__newspace">
          <button>+ NUEVO ESPACIO</button>
        </div>


        <div className="sidebar__body">
          <div className="list_task">
            {/* <ul>
              {taskLists.map((taskList, idTaskList) => {
                const { title } = taskList;
                return (
                  <li key={idTaskList}>
                    <TaskList title={title} />
                    <div className="sidebar_span">React & More</div>
                  </li>
                );
              })}
            </ul> */}
            <ul>
              {workSpaces.map((workSpace, idWorkSpace) => {
                const { title } = workSpace;
                return(
                  <li key={idWorkSpace}>
                    <div className="sidebar__workspace">
                      <WorkSpace title={title} />
                      <div className="sidebar__workspace-actions">
                        asdf
                      </div>
                    </div>
                    <div className="sidebar_span">React & More</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

      </div>
    </>
>>>>>>> parent of 7979caf... Se terminó el diseño con los estilos CSS del sidebar
=======
import React from "react";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div>
      <h2>
        Hola
      </h2>
    </div>
>>>>>>> parent of 2df4fb4... Merge remote-tracking branch 'origin/main' into dev
  );
};

export default Sidebar;
