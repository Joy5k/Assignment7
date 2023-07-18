import  { useState } from 'react';
import './TodoList.css'; // Import the CSS file for styling

function TodoList() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      setTasksList((prevTasksList) => [...prevTasksList, { description: task, completed: false }]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    setTasksList((prevTasksList) => prevTasksList.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasksList((prevTasksList) =>
      prevTasksList.map((item, i) => {
        if (i === index) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <p>If your task is completed, just click on the item or complete button and it will be marked as completed.</p>
      <form onSubmit={addTask}>
        <input className='inputField' type="text" value={task} onChange={handleInputChange} placeholder="Enter your task" />
        <button className='submitBtn' type="submit">Add Task</button>
      </form>
      <ul className="todo-list">
        {tasksList.map((task, index) => (
          <li key={index} className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleComplete(index)}>{task.description}</span>
            {
              task.completed ?  <button className='color-green' onClick={() => toggleComplete(index)}>Completed</button> : <button className='color-green' onClick={() => toggleComplete(index)} >Complete</button>
          }
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
