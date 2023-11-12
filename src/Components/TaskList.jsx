/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem";

import styles from "./TaskList.module.css";

export default function TaskList({ task, deleteTask, enterEditMode }) {
  return (
    <ul className={styles.task}>
      {task
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            enterEditMode={enterEditMode}
          />
        ))}
    </ul>
  );
}
