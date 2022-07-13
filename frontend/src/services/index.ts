import axios from "axios";

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

export { getAllTodos, createTodo };
