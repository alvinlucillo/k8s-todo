import { Todo } from "./Todo";

export interface ITodoProps {
  todos: Todo[];
  actions: ITodoActions;
}

export interface ITodoActions {
  deleteTodo: IDeleteTodoAction;
  addTodo: IAddTodoAction;
}

export type IDeleteTodoAction = (id: string) => void;
export type IAddTodoAction = (
  title: string,
  isChecked: boolean
) => Promise<void>;
