import TodoItem from "./TodoItem";

function Todolist({ todos, setTodos }) {
  function toggleChecked(i) {
    setTodos(
      todos.map((val, index) => {
        return {
          ...val,
          isChecked: index === i ? !val.isChecked : val.isChecked,
        };
      })
    );
  }

  return todos.map((el, index) => {
    return (
      <TodoItem
        key={el.id}
        isChecked={el.isChecked}
        toggleChecked={() => toggleChecked(index)}
      >
        {el.text}
      </TodoItem>
    );
  });
}

export default Todolist;
