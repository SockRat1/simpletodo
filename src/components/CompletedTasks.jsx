import TodoItem from "./TodoItem";
import styles from "./CompletedTasks.module.css";

function CompletedTasks({ getCheckedTodos, deleteTodo, toggleTodo }) {
  return (
    <>
      {getCheckedTodos().length != 0 && (
        <h1 className={styles.h1}>Completed Tasks</h1>
      )}

      {getCheckedTodos().map((el) => {
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

export default CompletedTasks;
