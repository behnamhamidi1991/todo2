import styles from "./tasks.module.css";
import { Task } from "../Task/Index";
import TodoContext from "../../Context/TodoProvider";
import { useContext } from "react";

export function Tasks() {
  const { tasks, clearAll } = useContext(TodoContext);

  const completedTasks = tasks.filter(
    (task) => task.isCompleted === true
  ).length;
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Create Tasks</p>
          <span>{tasks.length}</span>
        </div>
        <div>
          <p>Completed tasks</p>
          <span>
            {" "}
            {completedTasks} of {tasks.length}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
      <button
        className={
          tasks.length === 0 || tasks === null
            ? styles.clearAllHidden
            : styles.clearAll
        }
        onClick={() => clearAll()}
      >
        Clear all items
      </button>
    </section>
  );
}
