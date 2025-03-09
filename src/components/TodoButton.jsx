import styles from "./TodoButton.module.css";

function TodoButton({ children, onClick }) {
  return (
    <div onClick={onClick} className={styles.btn}>
      {children}
    </div>
  );
}

export default TodoButton;
