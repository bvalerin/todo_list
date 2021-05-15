
import React from 'react';

import addIcon from '../../images/button-icons/add.svg';
import pencilIcon from '../../images/button-icons/pencil.png';

export const TaskItem = () => {
    return (
        <div className="taskitem__main" >

            <div className="taskitem__navbar">
                <p>Mi lista de tareas</p>

                <div className="taskitem__navbar-group-icons">
                    <img src={ addIcon } alt="Add Icon" />
                    <img src={ pencilIcon } alt="Add Icon" />
                </div>
            </div>

            <div className="taskitem__subtask-list">
                <h4>Personal</h4>
                <h4>React & More</h4>
                <h4>Tarea de la Universidad</h4>
            </div>

        </div>
    )
}
