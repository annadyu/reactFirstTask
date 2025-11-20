import TaskList from "./taskList";
import { useState } from "react";
import PropTypes from "prop-types";

const TaskFilter = ({ todoFilter }) => {
  const [filterChange, setFilterChange] = useState("all");

  const changeFilter = (value) => {
    setFilterChange(value);
    todoFilter(value);
  };

  return (
    <ul className="filters">
      <li>
        <button
          className={filterChange === "all" ? "selected" : ""}
          onClick={() => changeFilter("all")}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={filterChange === "active" ? "selected" : ""}
          onClick={() => changeFilter("active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={filterChange === "completed" ? "selected" : ""}
          onClick={() => changeFilter("completed")}
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
