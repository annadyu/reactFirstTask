import { useState } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";

const Task = ({
  completed,
  description,
  completedData,
  handleChangeCompleted,
  id,
  deleteTask,
  onSaveNewTask,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [newDescription, setNewDescription] = useState(description);

  const confirming = (event) => {
    if (event.key === "Enter") {
      onSaveNewTask(id, newDescription);
      closeModal();
    }
  };

  const distanceToNow = formatDistanceToNow(new Date(completedData));

  return (
    <li className={` ${completed ? "completed" : "active"}`}>
      {isOpen ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          onKeyDown={confirming}
          onBlur={confirming}
        />
      ) : (
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
      )}
    </li>
  );
};

Task.PropTypes = {
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  completedData: PropTypes.string.isRequired,
  handleChangeCompleted: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  deleteTask: PropTypes.func,
  onSaveNewTask: PropTypes.func,
};

Task.defaultProps = {
  completed: false,
  completedData: "added just now",
};

export default Task;
