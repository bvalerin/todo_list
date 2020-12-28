import "./Cards.css";
import CardTaskList from "./CardTaskList";

const Cards = () => {
    let tasks = ["Solucionar Error", "Crear Componente Sidebar"];
    return (
        <div>
            <CardTaskList/> 
            {/* <div className="taskContainer">
                <header>
                    <h4>React & More</h4>
                    <span>
                        plus
                    </span>
                </header>
                <div className="tasks">
                    {tasks.map((v, i) => {
                        return (
                            <div className="task" key={i}>
                                {v}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="taskDescription">
                    <header>
                        <b>Detalles</b>
                        <b>Opciones</b>
                    </header>
                    <div className="description">
                        <h5>Solucionar error en codigo</h5>
                        <div>
                            <label>
                                Description
                            </label>
                            <br/>
                            <input type="text" />
                        </div>
                    </div>
            </div> */}
        </div>
    )
}

export default Cards;