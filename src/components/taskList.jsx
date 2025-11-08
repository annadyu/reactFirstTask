import Task from "./task";

const TaskList = ({
  tasks,
  handleClick,
  deliteTask,
  editTask,
  confirming,
  onSave
}) => {
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
          confirming={confirming}
          onSave={onSave}
        />
      ))}
    </ul>
  );
};

export default TaskList;
