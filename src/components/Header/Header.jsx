import styles from "./header.module.css";
import todoLogo from "../../assets/Logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState, useContext } from "react";
import TodoContext from "../../Context/TodoProvider";

export function Header() {
  const [text, setText] = useState("");

  const { addTasks } = useContext(TodoContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "" || text.trim().length === 0) {
      window.alert("Textfield is empty! :(");
    } else if (text !== "") {
      const newTask = {
        text,
      };

      addTasks(newTask);
      setText("");
    }
  };

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="todo logo" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          onChange={handleChange}
          value={text}
        />
        <button>
          Create
          <AiOutlinePlusCircle />
        </button>
      </form>
    </header>
  );
}
