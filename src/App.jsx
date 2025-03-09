import styles from "./App.module.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className={styles.app}>
      <TodoHeader className={styles.todoheader}></TodoHeader>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
