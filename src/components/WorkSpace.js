import React, { useState } from "react";
import TaskList from "./TaskList"

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
        <h3>{title}</h3>
        <ul>
            {taskLists.map((taskList, idTaskList) => {
                const { title } = taskList;
                return(
                    <li>
                        <TaskList title={title} />
                    </li>
                );
            })}
        </ul>
      </div>
    );
  };
  
  export default WorkSpace;