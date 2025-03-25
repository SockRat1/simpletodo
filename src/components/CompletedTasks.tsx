import TodoItem from "./TodoItem";
import styles from "./CompletedTasks.module.css";
import { TypeTodoItem } from "../App";

type TypeProps = {
  getCheckedTodos: () => TypeTodoItem[];
  deleteTodo: (i: number) => void;
  toggleTodo: (i: number) => void;
};
function CompletedTasks({ getCheckedTodos, deleteTodo, toggleTodo }: TypeProps) {
  return (
    <>
      {getCheckedTodos().length != 0 && <h1 className={styles.h1}>Completed Tasks</h1>}

      {getCheckedTodos().map((el: TypeTodoItem) => {
        return <TodoItem key={el.id} {...el} toggleTodo={() => toggleTodo(el.id)} deleteTodo={() => deleteTodo(el.id)} />;
      })}
    </>
  );
}

export default CompletedTasks;
