import TaskList from "./taskList";
import { useState } from "react";
import PropTypes from "prop-types";

const TaskFilter = ({ todoFilter }) => {
  const [filterChange, setFilterChange] = useState("all");

  const changeFilter = (value) => {
    setFilterChange(value);
  };

  return (
    <ul className="filters">
      <li>
        <button
          className={changeFilter === "all" ? "selected" : ""}
          onClick={() => {
            todoFilter("all");
            changeFilter("all");
          }}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={changeFilter === "active" ? "selected" : ""}
          onClick={() => {
            todoFilter("active");
            changeFilter("active");
          }}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={changeFilter === "completed" ? "selected" : ""}
           onClick={() => {
            todoFilter("completed");
            changeFilter("completed");
          }}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

TaskFilter.propTypes = {
  todoFilter: PropTypes.func.isRequired,
};

TaskFilter.defaultProps = {
  filter: "all",
};

export default TaskFilter;
