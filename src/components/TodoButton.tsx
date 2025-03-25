import { ReactNode } from "react";
import styles from "./TodoButton.module.css";

type TypeProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};
function TodoButton({ children, onClick, className }: TypeProps) {
  return (
    <div onClick={onClick} className={styles.btn + " " + className}>
      {children}
    </div>
  );
}

export default TodoButton;
