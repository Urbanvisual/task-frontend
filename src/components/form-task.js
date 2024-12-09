import React, { useState } from "react";

function TaskForm({handleCreateTask, showForm, handleShowForm}) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  
  return ( 
    <div>
      {
        showForm ? 
        <div>
          <div className="flex mb-4">
            <input
              type="text"
              className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a new task"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              onClick={() => {
                if (!taskTitle || !taskDescription) {
                  alert("Por favor llena los campos");
                  return;
                }

                const newTask = {
                  title: taskTitle,
                  description: taskDescription,
                };
                handleCreateTask(newTask)
              }
            }
            >
              Agregar
            </button>
          </div>
          <textarea
            className="w-full border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            rows="4"
          />
        </div> : 
       <div className="flex justify-end  mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleShowForm}
          >
            Crear tarea
          </button>
        </div>
      } 
    </div>


   );
}

export default TaskForm;