import { useState } from "react";
import PropTypes from "prop-types";

const NewTaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const aply = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask(newTask);
      setNewTask("");
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={aply}
        autoFocus
      />
    </header>
  );
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
