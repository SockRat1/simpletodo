import styles from "./App.module.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import CompletedTasks from "./components/CompletedTasks";

function App() {
  return (
    <div className={styles.app}>
      <TodoHeader></TodoHeader>
      <TodoList></TodoList>
      <CompletedTasks></CompletedTasks>
    </div>
  );
}

export default App;
