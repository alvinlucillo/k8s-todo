import { Box, Divider } from "@mui/material";
import { Todo } from "../types/Todo";
import TodoList from "../components/todo/TodoList";
import { useState, useEffect } from "react";
import { IAddTodoAction, ITodoActions } from "../types";
import NewTodo from "../components/todo/ NewTodo";

function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  };

  useEffect(() => {
    let tmp: Todo[] = [
      {
        id: 1,
        title: "hello",
        isChecked: false,
      },
      {
        id: 2,
        title: "hello",
        isChecked: false,
      },
    ];

    setTodos(tmp);
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
