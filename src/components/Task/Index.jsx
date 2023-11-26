import styles from "./task.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useContext } from "react";
import TodoContext from "../../Context/TodoProvider";

export function Task({ task }) {
  const { completedTasks, deleteTask } = useContext(TodoContext);

  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => completedTasks(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.text}
      </p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} onClick={() => deleteTask(task.id)} />
      </button>
    </div>
  );
}
