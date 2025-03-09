import styles from "./TodoButton.module.css";

function TodoButton({ children, onClick, className }) {
  return (
    <div onClick={onClick} className={styles.btn + " " + className}>
      {children}
    </div>
  );
}

export default TodoButton;
