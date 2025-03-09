import styles from "./App.module.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <TodoHeader className={styles.todoheader}></TodoHeader>
      <TodoList></TodoList>
    </>
  );
}

export default App;
