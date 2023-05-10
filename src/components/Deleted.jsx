import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

function Deleted({ delToDo, setDelToDo }) {
  const clearTask = (mapindex) => {
    setDelToDo(
      delToDo.filter((value, index) => {
        return index !== mapindex;
      })
    );
  };

  return (
    <div className="todo-app">
      <h1>Deleted</h1>
      <div>
        {delToDo.map((value, index) => {
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

export default Deleted;
