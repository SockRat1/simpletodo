import { useState } from "react";
import TodoItem from "./TodoItem";

function Todolist({ children }) {
  const [checkedStates, setCheckedStates] = useState(children.map(() => false));

  function toggleChecked(index) {
    setCheckedStates((prev) => {
      return prev.map((val, i) => {
        return i === index ? !val : val;
      });
    });
  }
  return (
    <>
      {children.map((el, index) => (
        <TodoItem
          key={index}
          isChecked={checkedStates[index]}
          toggleChecked={() => toggleChecked(index)}
        >
          {el.text}
        </TodoItem>
      ))}
    </>
  );
}

export default Todolist;
