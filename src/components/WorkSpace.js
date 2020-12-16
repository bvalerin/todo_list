import React, { useState } from "react";
import TaskList from "./TaskList";
import { ReactComponent as OptionsLogo } from "../images/options.svg";
import { ReactComponent as PlusLogo } from "../images/plus.svg";

const WorkSpace = ({ title }) => {
    const [taskLists, setTaskList] = useState([
        {
            idTaskList: 1,
            title: "Personal"
        },
        {
            idTaskList: 2,
            title: "React & More"
        },
        {
            idTaskList: 1,
            title: "Tarea de la Universidad"
        }
    ]);
    return (
      <div className="tasklists">
          <div className="workspace">
            <h3>{title}</h3>
            <div className="workspace__options">
                <div className="dropdown">
                    <button className="dropdown-button">
                        <OptionsLogo className="workspace__logo-options" />
                    </button>
                    <ul className="dropdown-content">
                        <li>Editar</li>
                        <li>Eliminar</li>
                    </ul>
                </div>
                <PlusLogo className="workspace__logo-plus" />
            </div>
          </div>
        <ul className="workspace__tasklists">
            {taskLists.map((taskList, idTaskList) => {
                const { title } = taskList;
                return(
                    <li key={idTaskList}>
                        <TaskList title={title} />
                    </li>
                );
            })}
        </ul>
      </div>
    );
  };
  
  export default WorkSpace;