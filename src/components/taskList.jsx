import Task from "./task";

const TaskList = ({ Tasks }) => {
    return (
        <ul className="todo-list">
            <Task />
        </ul>
    );
};

export default TaskList