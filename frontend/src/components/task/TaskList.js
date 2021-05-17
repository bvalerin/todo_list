
import React from 'react';
import { TaskItem } from './TaskItem';

export const TaskList = () => {

    const tasks = [ 1, 2, 3 ];

    return (
        <ul className="tasklist">
            {
                tasks.map( task => (
                    <li
                        key={ task }
                    >
                        <TaskItem />
                    </li>
                ) )
            }
        </ul>
    )
}
