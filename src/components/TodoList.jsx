import CompletedTasks from "./CompletedTasks";
import UncompletedTasks from "./UncompletedTasks";
function Todolist({ todos, deleteTodo, toggleTodo }) {
  function getUncheckedTodos(todos) {
    return todos.filter((todo) => !todo.isChecked);
  }
  function getCheckedTodos(todos) {
    return todos.filter((todo) => todo.isChecked);
  }

  return (
    <>
      <UncompletedTasks
        getUncheckedTodos={() => getUncheckedTodos(todos)}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      <CompletedTasks
        getCheckedTodos={() => getCheckedTodos(todos)}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </>
  );
}

export default Todolist;
