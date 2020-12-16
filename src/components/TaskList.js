import React from "react";
import { ReactComponent as OptionsLogo} from "../images/options.svg";

const TaskList = ({title}) => {
  return (
    <div className="tasklist">
      <h4>{title}</h4>
      <div className="dropdown">
          <button className="dropdown-button">
              <OptionsLogo className="tasklist__logo-options" />
          </button>
          <ul className="dropdown-content">
              <li>Editar</li>
              <li>Eliminar</li>
          </ul>
      </div>
    </div>
  );
};

export default TaskList;
