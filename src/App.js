import React, { useState } from 'react';
import Task from './Task';

function App() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([
    { name: 'Task 1', description: 'This is the first task', completed: false },
    { name: 'Task 2', description: 'This is the second task', completed: false },
    { name: 'Task 3', description: 'This is the third task', completed: true }
  ]);

  return (
    <div>
      <h1>Task List</h1>
      {/* Pass each task to the Task component as props */}
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
}

export default App;
