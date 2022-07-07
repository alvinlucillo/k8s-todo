import { ITodoProps } from "../../types";
import TodoItem from "./TodoItem";

function TodoList(props: ITodoProps) {
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} actions={props.actions} />
      ))}{" "}
    </div>
  );
}

export default TodoList;
