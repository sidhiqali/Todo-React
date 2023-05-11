import { useState } from 'react';
import Progress from './components/Progress';
import Deleted from './components/Deleted';
import Completed from './components/Completed';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const [delToDo, setDelToDo] = useState([]);
  const [comptdToDo, setComptdToDo] = useState([]);

  const addNewTask = () => {
    if (toDo !== '') {
      setToDos([...toDos, toDo]);
      setToDo('');
    }
  };

  const deleteTask = (mapindex) => {
    setToDos(
      toDos.filter((value, index) => {
        return index !== mapindex;
      })
    );
    setDelToDo([
      ...delToDo,
      ...toDos.filter((value, index) => {
        return index === mapindex;
      }),
    ]);
  };

  const completeTask = (mapindex) => {
    
    setToDos(
      toDos.filter((value, index) => {
        console.log(mapindex);
        console.log(index);
        return index !== mapindex;
       
      })
    );
    console.log(toDos);
    setComptdToDo([
      ...comptdToDo,
      ...toDos.filter((value, index) => {
        return index === mapindex;
      }),
    ]);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '350%', marginTop: '1em' }}>
        TODO APP
      </h1>
      <div className='row'>
        <Completed comptdToDo={comptdToDo} setComptdToDo={setComptdToDo} />
        <Progress
          toDo={toDo}
          setToDo={setToDo}
          toDos={toDos}
          addNewTask={addNewTask}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
        <Deleted delToDo={delToDo} setDelToDo={setDelToDo} />
      </div>
    </div>
  );
}

export default App;
