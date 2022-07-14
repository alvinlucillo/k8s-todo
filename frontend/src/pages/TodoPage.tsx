import { Box, Divider } from "@mui/material";
import { Todo } from "../types/Todo";
import TodoList from "../components/todo/TodoList";
import { useState, useEffect } from "react";
import { ITodoActions } from "../types";
import NewTodo from "../components/todo/ NewTodo";

import {
  createTodo,
  getAllTodos,
  deleteTodoById,
  updateTodoById,
} from "../services";

function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const deleteTodo = async (id: string) => {
    await deleteTodoById(id);
    await refreshTodosList();
  };

  const addTodo = async (title: string, isChecked: boolean) => {
    await createTodo(title, isChecked);
    await refreshTodosList();
  };

  const updateTodo = async (todo: Todo) => {
    await updateTodoById(todo);
    await refreshTodosList();
  };

  const refreshTodosList = async () => {
    let resp = await getAllTodos();

    setTodos(resp.data);
  };

  useEffect(() => {
    (async () => {
      await refreshTodosList();
    })();
  }, []);

  const actions: ITodoActions = {
    deleteTodo,
    addTodo,
    updateTodo,
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <h3>Just another todo app...</h3>
      <Divider />
      <NewTodo addTodo={addTodo} />
      <Divider />
      <TodoList todos={todos} actions={actions} />
    </Box>
  );
}

export default TodoPage;
