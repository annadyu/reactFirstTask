import React, { useState } from "react";
import Task from "./components/task";
import Footer from "./components/Footer";
import TaskFilter from "./components/TasksFilter";
import TaskList from "./components/taskList";
import NewTaskForm from "./components/NewTaskForm";
import "./App.css";

function App() {
  const handleClick = (id) => {
    setTasks(
      tasks.map((el) =>
        el.id === id
          ? {
              ...el,
              completed: true,
              active: false,
            }
          : el
      )
    );
  };

  const deliteTask = (id) => {
    const newTasks = tasks.filter((tasks) => tasks.id !== id);
    setTasks(newTasks);
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((el) =>
        el.id === id
          ? {
              ...el,
              editing: true,
            }
          : el
      )
    );
  };

  const onSave = (id, newDescription) => {
    setTasks(
      tasks.map((el) =>
        el.id === id
          ? {
              ...el,
              description: newDescription,
              editing: false,
            }
          : el
      )
    );
  };

  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Cleaning :-)",
      completed: false,
      active: true,
      completedData: "3 min ago",
      editing: false,
    },
    {
      id: 2,
      description: "Dinner time ;3",
      completed: false,
      active: true,
      completedData: "1 hour ago",
      editing: false,
    },
    {
      id: 3,
      description: "Watching TV",
      completed: false,
      active: true,
      completedData: "2 min ago",
      editing: false,
    },
  ]);

  return (
    <>
      <NewTaskForm />
      <TaskList
        tasks={tasks}
        handleClick={handleClick}
        deliteTask={deliteTask}
        editTask={editTask}
        onSave={onSave}
      />
      <Footer />
    </>
  );
}

export default App;
