import React, { useState, useEffect } from "react";
import TaskForm from '../components/form-task';
import ListsTask from '../components/lists-task';
import { getAllTasks, createTask, updateTask, deleteTask } from "../service/api";

function InitialPage() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [reload, setReload] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleShowForm = () => {
    setShowForm(!showForm);
  }

  const handleCreateTask = async (newTask) => {
    try {
      const task = await createTask(newTask);
      console.log("Task created successfully:", task);
      setShowForm(false)
      setReload(true);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true); 
        const data = await getAllTasks();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
      setReload(false);
    };

    fetchTasks();
  }, [reload]);

  const toggleTask = async (id) => {
    try {
      const task = await updateTask(id);
      console.log("Task updated successfully:", task);
      setReload(true);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const resp = await deleteTask(id);
      console.log("Task delete successfully:", resp);
      if (resp) {
        setReload(true);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (  
    <div className="App">
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold mb-5">Tareas</h1>
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mx-auto">
          <TaskForm handleCreateTask={handleCreateTask} showForm={showForm} handleShowForm={handleShowForm}/>
          <ListsTask tasks={tasks} loading={loading} error={error} toggleTask={toggleTask} handleDeleteTask={handleDeleteTask}/>
        </div>
      </div>
    </div> 
  );
}

export default InitialPage;