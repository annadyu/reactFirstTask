import Task from "./task";
import PropTypes from "prop-types";

const TaskList = ({ tasks, handleChangeCompleted, deleteTask, confirming, onSaveNewTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((el) => (
        <Task
          key={el.id}
          id={el.id}
          description={el.description}
          completedData={el.completedData}
          completed={el.completed}
          handleChangeCompleted={handleChangeCompleted}
          deleteTask={deleteTask}
         
          onSaveNewTask={onSaveNewTask}
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
  handleChangeCompleted: PropTypes.func.isRequired,
  deleteTask: PropTypes.func,
  confirming: PropTypes.func.isRequired,
  onSaveNewTask: PropTypes.func,
};

export default TaskList;
