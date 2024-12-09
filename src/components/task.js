import React from "react";

function Task({task, toggleTask, handleDeleteTask}) {
  return ( 
    <li key={task.id}
      className={`shadow ${task.completed ? "bg-green-100" : "bg-gray-50"}`}>
      <div className="flex items-center justify-between p-3 rounded-md">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-3 h-5 w-5 text-blue-500"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span
            className={`text-lg ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </span>
        </div>
        <div className="flex justify-between space-x-2">
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="p-3">
        <span
          className={`block text-mg text-left ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.description}
        </span>
      </div>
    </li>
   );
}

export default Task;