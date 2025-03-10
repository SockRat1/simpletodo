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
  function deletefn(i) {
    setTodos((prev) => {
      const arr = [...prev];
      arr.splice(i, 1);
      return arr;
    });
  }

  return todos.map((el) => {
    return (
      <TodoItem
        key={el.id}
        isChecked={el.isChecked}
        toggleChecked={() => toggleChecked(el.id)}
        deletefn={() => deletefn(el.id)}
      >
        {el.text}
      </TodoItem>
    );
  });
}

export default Todolist;
