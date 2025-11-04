const Task = ({ completed, editing, description, completedData }) => {
    return (
        <li className={`${completed ? "completed" : ""} ${editing ? "editing" : ""}`}>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>
                    <span className="description">{description}</span>
                    <span className="created">{completedData}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
        </li>
    );
};

export default Task