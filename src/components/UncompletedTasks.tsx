import { TypeTodoItem } from "../App";
import TodoItem from "./TodoItem";

type TypeProps = {
  getUncheckedTodos: () => TypeTodoItem[];
  deleteTodo: (i: number) => void;
  toggleTodo: (i: number) => void;
};
function UncompletedTasks({ getUncheckedTodos, toggleTodo, deleteTodo }: TypeProps) {
  return (
    <>
      {getUncheckedTodos().map((el: TypeTodoItem) => {
        return <TodoItem key={el.id} {...el} toggleTodo={() => toggleTodo(el.id)} deleteTodo={() => deleteTodo(el.id)} />;
      })}
    </>
  );
}

export default UncompletedTasks;
