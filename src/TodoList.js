import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      setTasksList((prevTasksList) => [...prevTasksList, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    setTasksList((prevTasksList) => prevTasksList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input type="text" value={task} onChange={handleInputChange} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasksList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
