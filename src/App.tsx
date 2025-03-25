import { useState } from "react";
import styles from "./App.module.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

export type TypeTodoItem = {
  id: number;
  text: string;
  isChecked: boolean;
};
function App() {
  const [value, setValue] = useState<string>("");
  const [getTodos, setTodos] = useState<TypeTodoItem[]>([]);
  const [nextId, setNextId] = useState<number>(0);

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

  function toggleTodo(i: number) {
    setTodos(
      getTodos.map((val, index) => {
        return {
          ...val,
          isChecked: index === i ? !val.isChecked : val.isChecked,
        };
      })
    );
  }

  function deleteTodo(i: number) {
    setTodos((prev) => {
      const arr = [...prev];
      arr.splice(i, 1);
      return arr;
    });
  }

  return (
    <div className={styles.app}>
      <TodoHeader value={value} setValue={setValue} onAdd={addHadler} onReset={onReset} onClear={onClear}></TodoHeader>
      <TodoList todos={getTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
