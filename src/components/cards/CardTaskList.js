import React from "react";
import Task from "../Task";

const CardTaskList = () => {
    return (
        <div className="cardTaskList">
            <div className="cardTaskList__header">
                <h3>React & More</h3>
            </div>
            <div className="cardTaskList__content">
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    );
}


export default CardTaskList;