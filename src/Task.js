import React from 'react';

function Task({ task }) {
    return (
        <div>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
        </div>
    );
}

export default Task;
