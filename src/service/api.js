const urlBase = "https://indexes-sampling-technician-dancing.trycloudflare.com";

export const getAllTasks = async () => {
  try {
    const response = await fetch(`${urlBase}/task/tasks`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const updateTask = async (id) => {
  try {
    const response = await fetch(`${urlBase}/task/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const createTask = async (task) => {
  try {
    const response = await fetch(`${urlBase}/task/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${urlBase}/task/task/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error("Error deleting task:", error);
    return false;
  }
};
