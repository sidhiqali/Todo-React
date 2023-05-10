import React from 'react';
import { TextField } from '@mui/material';
import { IoIosAddCircle } from 'react-icons/io';
import { RiCloseCircleLine } from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';

function Progress({
  addNewTask,
  toDos,
  toDo,
  setToDo,
  deleteTask,
  completeTask,
}) {
  const HandleChange = (e) => {
    setToDo(e.target.value);
  };

  return (
    <div className='todo-app'>
      <h1>What's the Plan for Today?</h1>
      <form className='todo-form'>
        <input
          value={toDo}
          onChange={HandleChange}
          required
          label='enter your task'
          varient='outlined'
          className='todo-input'
        />
        <button onClick={addNewTask} className='todo-button'>
          Add Task
        </button>
      </form>
      <div>
        {toDos.map((value, index) => {
          return (
            <div className='todo-row' key={index}>
              <p>{value}</p>
              <div className='icons'>
                <AiFillCheckCircle onClick={() => completeTask(index)} />

                <RiCloseCircleLine
                  className='delete-icon'
                  onClick={() => deleteTask(index)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Progress;
