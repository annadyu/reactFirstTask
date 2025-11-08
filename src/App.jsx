import React, { useState } from "react";
import Task from "./components/task";
import Footer from "./components/Footer";
import TaskFilter from "./components/TasksFilter";
import TaskList from "./components/taskList";
import NewTaskForm from "./components/NewTaskForm";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Cleaning :-)",
      completed: false,
      completedData: "3 min ago",
    },
    {
      id: 2,
      description: "Dinner time ;3",
      completed: false,
      completedData: "1 hour ago",
    },
    {
      id: 3,
      description: "Watching TV",
      completed: false,
      completedData: "2 min ago",
    },
  ]);

  const handleClick = (id) => {
    setTasks(
      tasks.map((el) =>
        el.id === id
          ? {
              ...el,
              completed: true,
            }
          : el
      )
    );
  };

  const deliteTask = (id) => {
    const newTasks = tasks.filter((tasks) => tasks.id !== id);
    setTasks(newTasks);
  };

  const clearTask = () => {
    const cleared = tasks.filter((el) => !el.completed);
    setTasks(cleared);
  };

  const todoFilter = (type) => {
    setFilter(type);
  };

  const filteredTasks = tasks.filter((el) => {
    if (filter === "active") return !el.completed;
    if (filter === "completed") return el.completed;
    return true;
  });

  const onSave = (id, newDescription) => {
    setTasks(
      tasks.map((el) =>
        el.id === id
          ? {
              ...el,
              description: newDescription,
            }
          : el
      )
    );
  };

  const addTask = (description) => {
    setTasks([
      ...tasks,
      {
        id: new Date(),
        description,
        completed: false,
      },
    ]);
  };

  const tasksLeft =
    tasks.filter ((el) => !el.completed).length;
  

  window.addTask = addTask;

  return (
    <>
      <NewTaskForm />
      <TaskList
        handleClick={handleClick}
        deliteTask={deliteTask}
        onSave={onSave}
        tasks={filteredTasks}
      />
      <Footer 
      clearTask={clearTask}
       todoFilter={todoFilter} 
         tasksLeft={tasksLeft}
       />
    </>
  );
}

export default App;
