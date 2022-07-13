import { Box, Divider } from "@mui/material";
import { Todo } from "../types/Todo";
import TodoList from "../components/todo/TodoList";
import { useState, useEffect } from "react";
import { ITodoActions } from "../types";
import NewTodo from "../components/todo/ NewTodo";

import { createTodo, getAllTodos } from "../services";

function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = async (title: string, isChecked: boolean) => {
    // setTodos((prevTodos) => {
    //   return [...prevTodos, todo];
    // });

    await createTodo(title, isChecked);

    await refreshTodosList();
  };

  const refreshTodosList = async () => {
    let resp = await getAllTodos();
    console.log(resp.data);

    setTodos(resp.data);
  };

  useEffect(() => {
    (async () => {
      await refreshTodosList();
    })();
  }, []);

  const actions: ITodoActions = {
    deleteTodo: deleteTodo,
    addTodo: addTodo,
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
