import TaskFilter from "./TasksFilter";

const Footer = ({ clearTask, todoFilter, tasksLeft}) => {
    return (
        <footer className="footer">
            <span className="todo-count"> {tasksLeft} items left</span>
            <TaskFilter 
            todoFilter={todoFilter}
            />
            <button className="clear-completed" onClick={() => clearTask()}>Clear completed</button>
        </footer>
    );
};

export default Footer;