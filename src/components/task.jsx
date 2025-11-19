import { useState } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";

const Task = ({
  completed,
  description,
  completedDate,
  handleChangeCompleted,
  id,
  deleteTask,
  onSaveNewTask,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const confirming = (event) => {
    if (event.key === "Enter") {
      onSaveNewTask(id, newDescription);
      closeModal();
    }
  };

  const distanceToNow = formatDistanceToNow(new Date(completedDate));

  return (
    <li className={`${isOpen ? "editing" : ""} ${completed ? "completed" : ""}`}>
      <div>
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeCompleted(id)}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">{distanceToNow} ago</span>
        </label>
        <button className="icon icon-edit" onClick={openModal}></button>
        <button
          className="icon icon-destroy"
          onClick={() => deleteTask(id)}
        ></button>
      </div>
      <input
        type="text"
        className="edit"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        onKeyDown={confirming}
        onBlur={confirming}
      />
    </li>
  );
};

Task.PropTypes = {
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  completedDate: PropTypes.string.isRequired,
  handleChangeCompleted: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  deleteTask: PropTypes.func,
  onSaveNewTask: PropTypes.func,
};

Task.defaultProps = {
  completed: false,
  completedDate: "added just now",
};

export default Task;
