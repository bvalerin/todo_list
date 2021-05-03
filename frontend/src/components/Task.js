import React from "react";

const Task = () => {
  return (
    <div className="task">
      <label className="chbx-container">  
        <input type="checkbox" className="checkmark"/>
        <span class="checkmark"></span>
        <h4>Solucionar error en código  </h4>
      </label>
    </div>
  );
};

export default Task;
