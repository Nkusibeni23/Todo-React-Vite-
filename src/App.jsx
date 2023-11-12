/* eslint-disable no-undef */
import { useState } from "react";
// Custom Hooks
import useLocalStorage from "./Hooks/useLocalStorage";

import CustomForm from "./Components/CustomForm";
import EditFrom from "./Components/EditForm";
import TaskList from "./Components/TaskList";

export default function App() {
  const [task, setTask] = useLocalStorage("react-todo.tasks", []);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setEditing] = useState(false);

  const addTask = (task) => {
    setTask((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTask((prevState) => prevState.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTask((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };
  const updateTask = (task) => {
    setTask((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    // Todo: Close the mode
    closeEditMode();
  };

  const closeEditMode = () => {
    setEditing(false);
    //Todo: Previous State focus
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setEditing(true);
    // Todo: set Focus back to original
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing ? (
        <EditFrom editedTask={editedTask} updateTask={updateTask} />
      ) : null}

      <CustomForm addTask={addTask} />
      {task && (
        <TaskList
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}
