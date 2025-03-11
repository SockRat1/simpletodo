import { useState } from "react";
import styles from "./App.module.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  const [value, setValue] = useState("");
  const [getTodos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(0);

  function addHadler() {
    setTodos([...getTodos, { id: nextId, text: value, isChecked: false }]);
    setNextId((prev) => prev + 1);
    setValue("");
  }

  function onReset() {
    setTodos([]);
  }

  function onClear() {
    const arr = getTodos.filter((todo) => !todo.isChecked);
    setTodos(arr);
  }

  function toggleTodo(i) {
    setTodos(
      getTodos.map((val, index) => {
        return {
          ...val,
          isChecked: index === i ? !val.isChecked : val.isChecked,
        };
      })
    );
  }

  function deleteTodo(i) {
    setTodos((prev) => {
      const arr = [...prev];
      arr.splice(i, 1);
      return arr;
    });
  }

  return (
    <div className={styles.app}>
      <TodoHeader
        value={value}
        setValue={setValue}
        onAdd={addHadler}
        onReset={onReset}
        onClear={onClear}
      ></TodoHeader>
      <TodoList
        todos={getTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;
