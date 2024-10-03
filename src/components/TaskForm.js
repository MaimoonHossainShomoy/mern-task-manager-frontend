import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/tasks', { title })
      .then((response) => setTasks((prev) => [...prev, response.data]))
      .catch((error) => console.error('Error creating task:', error));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='New Task'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type='submit'>Add Task</button>
    </form>
  );
};

export default TaskForm;
