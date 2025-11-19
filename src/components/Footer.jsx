import PropTypes from "prop-types";
import TaskFilter from "./TasksFilter";

const Footer = ({ clearTask, todoFilter, tasksLeft }) => {
  return (
    <footer className="footer">
      <span className="todo-count"> {tasksLeft > 1 ? `${tasksLeft} items left` : `${tasksLeft} item left`}</span>
      <TaskFilter todoFilter={todoFilter} />
      <button className="clear-completed" onClick={() => clearTask()}>
        Clear completed
      </button>
    </footer>
  );
};


Footer.propTypes = {
    clearTask : PropTypes.func.isRequired,
    todoFilter : PropTypes.func.isRequired,
    tasksLeft : PropTypes.number.isRequired
}

export default Footer;
