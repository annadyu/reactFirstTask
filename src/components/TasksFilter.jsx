import TaskList from "./taskList";
import PropTypes from "prop-types";

const TaskFilter = ({ todoFilter }) => {
  return (
    <ul className="filters">
      <li>
        <button className="selected" onClick={() => todoFilter("all")}>
          All
        </button>
      </li>
      <li>
        <button onClick={() => todoFilter("active")}>Active</button>
      </li>
      <li>
        <button onClick={() => todoFilter("completed")}>Completed</button>
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
