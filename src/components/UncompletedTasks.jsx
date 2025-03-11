import TodoItem from "./TodoItem";

function UncompletedTasks({ getUncheckedTodos, toggleTodo, deleteTodo }) {
  return (
    <>
      {getUncheckedTodos().map((el) => {
        return (
          <TodoItem
            key={el.id}
            {...el}
            toggleTodo={() => toggleTodo(el.id)}
            deleteTodo={() => deleteTodo(el.id)}
          />
        );
      })}
    </>
  );
}

export default UncompletedTasks;
