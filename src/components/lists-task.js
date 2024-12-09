import React from "react";
import Task from "./task";

function ListsTask({tasks, loading, error, toggleTask, handleDeleteTask}) {

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div>Error loading tasks: {error}</div>;
  }

  return ( 
    <div >
        <ul className="space-y-3">
          {tasks.map((task) => (
            <Task task={task} toggleTask={toggleTask} handleDeleteTask={handleDeleteTask}/>
          ))}
        </ul>
     </div>
   );
}

export default ListsTask;