import styles from "./TodoHeader.module.css";
import TodoControls from "./TodoControls";
function TodoHeader() {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>Todo List</h1>
      <div className={styles.form}>
        <input className={styles.input}></input>
        <div className={styles.btn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            className={styles.plus}
          >
            <path
              fill-rule="evenodd"
              d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
            ></path>
          </svg>
        </div>
      </div>
      <TodoControls></TodoControls>
    </div>
  );
}

export default TodoHeader;
