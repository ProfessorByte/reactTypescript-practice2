import { Todo } from "../interfaces/interfaces";

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const handleDbClick = () => {
    console.log("handleDbClick", todo.desc);
  };

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={handleDbClick}
    >
      {todo.desc}
    </li>
  );
};
