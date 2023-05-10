import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
function Completed({ comptdToDo, setComptdToDo }) {
  const clearTask = (mapindex) => {
    setComptdToDo(
      comptdToDo.filter((value, index) => {
        return index !== mapindex;
      })
    );
  };

  return (
    <div className="todo-app">
      <h1>Completed</h1>
      <div>
        {comptdToDo.map((value, index) => {
          return (
            <div className="todo-row" key={index}>
              <p>{value}</p>
              <div className="icons">
                <RiCloseCircleLine
                  className="delete-icon"
                  onClick={() => clearTask(index)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Completed;
