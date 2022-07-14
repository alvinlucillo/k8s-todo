import { Todo } from "./Todo";

export interface ITodoProps {
  todos: Todo[];
  actions: ITodoActions;
}

export interface ITodoActions {
  deleteTodo: IDeleteTodoAction;
  addTodo: IAddTodoAction;
  updateTodo: IUpdateTodoAction;
}

export type IDeleteTodoAction = (id: string) => Promise<void>;

export type IAddTodoAction = (
  title: string,
  isChecked: boolean
) => Promise<void>;

export type IUpdateTodoAction = (todo: Todo) => Promise<void>;
