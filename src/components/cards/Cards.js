import React, { useState } from 'react';
import "./Cards.css";

const Cards = () => {
    let tasks = ["Solucionar Error", "Crear Componente Sidebar"];
    return (
        <div className="bodyTask">
            <div className="TaskContainer">
                <header>
                    <h4>React & More</h4>
                    <span>
                        plus
                    </span>
                </header>
                <div className="Tasks">
                    {tasks.map((v, i) => {
                        return (
                            <div className="task" key={i}>
                                {v}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="TaskDescription">
                    <header>
                        <b>Detalles</b>
                        <b>Opciones</b>
                    </header>
                    <div className="Description">
                        <h5>Solucionar error en codigo</h5>
                        <div>
                            <label>
                                Description
                            </label>
                            <br/>
                            <input type="text" />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Cards;