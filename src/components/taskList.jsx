import Task from "./task";
import PropTypes from "prop-types";

const TaskList = ({ tasks, handleClick, deliteTask, confirming, onSave }) => {
  return (
    <ul className="todo-list">
      {tasks.map((el) => (
        <Task
          key={el.id}
          id={el.id}
          description={el.description}
          completedData={el.completedData}
          completed={el.completed}
          handleClick={handleClick}
          deliteTask={deliteTask}
         
          onSave={onSave}
        />
      ))}
    </ul>
  );
};


TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      completedData: PropTypes.string,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  deliteTask: PropTypes.func,
  confirming: PropTypes.func.isRequired,
  onSave: PropTypes.func,
};

export default TaskList;
