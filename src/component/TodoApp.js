import './TodoApp.css';
import {useState} from 'react';
const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };

      setTaskList([...tasklist, taskDetails]);
    }
  };

  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter(t => t.id !== id));
  };

  return (
    <div className='todo'>
      <input 
      type='text' 
      name= 'text' 
      id='text' 
      onChange = {(e) => handleChange(e)} 
      placeholder='Add task here' />
      <button className='add-btn' onClick={AddTask}>Add task</button>
      {tasklist !== [] ?
      <ul>
        {tasklist.map(t =>
          <li className='listitem'>
            {t.value}
            <button className='completed'>Completed</button>
            <button 
              className='delete' 
              onClick={e => deletetask(e, t.id)}>
                Delete
            </button>
          </li>
          )}
        
      </ul>

      : null}
    </div>
  );
};
export default TodoApp;