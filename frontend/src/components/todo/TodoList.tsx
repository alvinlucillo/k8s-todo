import { ITodoProps } from "../../types";
import TodoItem from "./TodoItem";

function TodoList(props: ITodoProps) {
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} actions={props.actions} />
      ))}{" "}
      {props.todos && props.todos.length == 0 && (
        <span>
          <br />
          Nothing to do &nbsp; (╥_╥)
        </span>
      )}
    </div>
  );
}

export default TodoList;
