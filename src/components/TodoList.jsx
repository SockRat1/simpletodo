import TodoItem from "./TodoItem";

function Todolist({ todos, deleteTodo, toggleTodo }) {
  return todos.map((el) => {
    return (
      <TodoItem
        key={el.id}
        isChecked={el.isChecked}
        toggleChecked={() => toggleTodo(el.id)}
        deletefn={() => deleteTodo(el.id)}
      >
        {el.text}
      </TodoItem>
    );
  });
}

export default Todolist;
