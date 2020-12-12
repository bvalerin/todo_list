import React, { useState } from "react";
import "./Sidebar.css";
import user from "../../images/user.svg";

import Task from "../Task";

const Sidebar = () => {
  const [tasks, setTask] = useState([
    {
      idTask: "1",
      title: "TodoList",
      description: "Proyecto en ejecucion",
    },
    {
      idTask: "2",
      title: "Proyecto Restaurante",
      description: "Tarea de la Universidad",
    },
    {
      idTask: "3",
      title: "Sistema de licencias",
      description: "Proyecto personal",
    },
  ]);
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_header">
          <img src={user} alt="user" />
          <span>Nombre del Usuario</span>
        </div>
        <div className="sidebar_body">
          <button>+ Nuevo espacio de Trabajo</button>
          <div className="list_task">
            <ul>
              {tasks.map((task, idTask) => {
                const { title, description } = task;
                return (
                  <li key={idTask}>
                    <Task title={title} description={description} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
