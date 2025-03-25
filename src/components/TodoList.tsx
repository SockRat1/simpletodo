import { TypeTodoItem } from "../App";
import CompletedTasks from "./CompletedTasks";
import UncompletedTasks from "./UncompletedTasks";

type TypeProps = {
  todos: TypeTodoItem[];
  deleteTodo: (i: number) => void;
  toggleTodo: (i: number) => void;
};
function Todolist({ todos, deleteTodo, toggleTodo }: TypeProps) {
  function getUncheckedTodos(todos: TypeTodoItem[]): TypeTodoItem[] {
    return todos.filter((todo: TypeTodoItem) => !todo.isChecked);
  }
  function getCheckedTodos(todos: TypeTodoItem[]): TypeTodoItem[] {
    return todos.filter((todo: TypeTodoItem) => todo.isChecked);
  }

  return (
    <>
      <UncompletedTasks getUncheckedTodos={() => getUncheckedTodos(todos)} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      <CompletedTasks getCheckedTodos={() => getCheckedTodos(todos)} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
}

export default Todolist;
