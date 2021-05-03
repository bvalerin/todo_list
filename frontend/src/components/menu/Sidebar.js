import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import user from "../../images/user.svg";
import perfil from "../../images/perfil.jpg"

import TaskList from "../TaskList";
import WorkSpace from "../WorkSpace";
import { ReactComponent as PlusLogo } from "../../images/plus.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {

  
  
  useEffect(() => {
    const btnToggle = document.querySelector('.toggle-btn');
    btnToggle.addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('sidebar__active');
    });
  });

  /* document.addEventListener('DOMContentLoaded', ()=>{
    console.log(btnToggle);
    console.log("Componente");
  }); */


  /* btnToggle.addEventListener('click', function(){
    console.log(document.getElementById('sidebar'));    
  }); */


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
      <div className="sidebar" id="sidebar">
        <div className="toggle-btn">
          &#9776;
        </div>

        <div className="sidebar__header">
          <img src={perfil} alt="Imagen de Usuario" />
          <div className="sidebar__user-info">
            <p>Arian Cordoba</p>
            <small>arian.gasolero@gmail.com</small>
          </div>
        </div>
        <div className="sidebar__newspace">
          <button><PlusLogo className="sidebar__logo-plus"/> NUEVO ESPACIO</button>
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
            <ul className="sidebar__workspace">
              {workSpaces.map((workSpace, idWorkSpace) => {
                const { title } = workSpace;
                return(
                  <li key={idWorkSpace}>
                    <div>
                      <WorkSpace title={title} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="sidebar__footer">
          <Link to="/login">Cerrar Sesión</Link><small>v 1.0.0</small>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
