import { Todo } from "./Todo";

export interface ITodoProps {
    todos: Todo[];
    actions: ITodoActions;
}

export interface ITodoActions {
    deleteTodo: IDeleteTodoAction;
    addTodo: IAddTodoAction;
}

export type IDeleteTodoAction = (id: number) => void;
export type IAddTodoAction = (todo: Todo) => void;
