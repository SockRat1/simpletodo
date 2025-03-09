import { useState } from "react";
import styles from "./App.module.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import CompletedTasks from "./components/CompletedTasks";

function App() {
  const [getTodos, setTodos] = useState([]);
  let value;
  let setValue;
  function adoptedValue(e) {
    value = e;
  }
  function adoptedSetValue(e) {
    setValue = e;
  }
  function addHadler() {
    const newTodo = {
      text: value,
    };
    setTodos([...getTodos, newTodo]);
    setValue("");
  }

  return (
    <div className={styles.app}>
      <TodoHeader
        sendValue={adoptedValue}
        sendSetValue={adoptedSetValue}
        onAdd={addHadler}
      ></TodoHeader>
      <TodoList>{getTodos}</TodoList>
      <CompletedTasks></CompletedTasks>
    </div>
  );
}

export default App;
