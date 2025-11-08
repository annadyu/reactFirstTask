import TaskList from "./taskList";

const TaskFilter = ({todoFilter}) => {
  return (
    <ul className="filters">
      <li>
        <button className="selected" onClick={() => todoFilter('all')}>
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

export default TaskFilter;
