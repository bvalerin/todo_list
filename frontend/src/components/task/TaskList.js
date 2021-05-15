
import React from 'react';
import { TaskItem } from './TaskItem';

export const TaskList = () => {

    const tasks = [ 1, 2 ];

    return (
        <ul>
            {
                tasks.map( task => (
                    <TaskItem 
                        key={ task }
                    />
                ) )
            }
        </ul>
    )
}
