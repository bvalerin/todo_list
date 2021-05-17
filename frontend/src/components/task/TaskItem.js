
import React from 'react';

import addIcon from '../../images/button-icons/add.svg';
import pencilIcon from '../../images/button-icons/pencil.png';

export const TaskItem = () => {
    return (
        <div className="taskitem__main" >

            <div className="taskitem__navbar">
                <p>Mi lista de tareas</p>

                <div className="taskitem__navbar-group-icons">
                    <img src={ pencilIcon } alt="Add Icon" />
                    <img src={ addIcon } alt="Add Icon" />
                </div>
            </div>

            <ul className="taskitem__subtask-list">
                <li><p>React & More</p></li>
                <li><p>Personal</p></li>
                <li><p>Tarea de la Universidad</p></li>
            </ul>

        </div>
    )
}
