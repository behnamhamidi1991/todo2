import { createContext, useState, useEffect } from "react";

const TodoContext = createContext();
const LOCAL_STORAGE_KEY = "todo.savedTasks";

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // SAVE ITEMS TO LOCAL STORAGE
  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  // ADD NEW TASKS TO THE DOM
  const addTasks = (newTask) => {
    newTask.id = crypto.randomUUID();
    setTasksAndSave([newTask, ...tasks]);
  };

  //   COMPLETED TASKS
  const completedTasks = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  };

  //   DELETE TASKS
  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete your task?")) {
      setTasksAndSave(tasks.filter((task) => task.id !== id));
    }
  };

  //   CLEAR ALL TASKS
  const clearAll = () => {
    setTasksAndSave([]);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTasks,
        clearAll,
        completedTasks,
        deleteTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
