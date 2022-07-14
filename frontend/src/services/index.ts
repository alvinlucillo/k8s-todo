import axios from "axios";

import { Todo } from "../types";

const svc = axios.create({ baseURL: process.env.REACT_APP_API });

const getAllTodos = async () => {
  const response = await svc.get("/");

  return response;
};

const createTodo = async (title: string, isChecked: boolean) => {
  const response = await svc.post("/", {
    title,
    isChecked,
  });

  return response;
};

const deleteTodoById = async (id: string) => {
  const response = await svc.delete(`/${id}`);

  return response;
};

const updateTodoById = async (todo: Todo) => {
  const response = await svc.patch(`/${todo.id}`, {
    title: todo.title,
    isChecked: todo.isChecked,
  });

  return response;
};

export { getAllTodos, createTodo, deleteTodoById, updateTodoById };
