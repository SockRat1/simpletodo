import { useState } from "react";
import styles from "./App.module.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import CompletedTasks from "./components/CompletedTasks";

function App() {
  const [getTodos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(0);
  let value;
  let setValue;
  function adoptedValue(e) {
    value = e;
  }
  function adoptedSetValue(e) {
    setValue = e;
  }
  function addHadler() {
    setTodos([...getTodos, { id: nextId, text: value, isChecked: false }]);
    setNextId((prev) => prev + 1);
    setValue("");
  }

  return (
    <div className={styles.app}>
      <TodoHeader
        sendValue={adoptedValue}
        sendSetValue={adoptedSetValue}
        onAdd={addHadler}
      ></TodoHeader>
      <TodoList todos={getTodos} setTodos={setTodos} />
      <CompletedTasks></CompletedTasks>
    </div>
  );
}

export default App;
