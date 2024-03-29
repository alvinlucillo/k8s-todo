import { IconButton, Checkbox } from "@mui/material";
import { useState, useEffect } from "react";

import { Todo } from "../../types/Todo";
import { ITodoActions } from "../../types";

import { Delete as DeleteIcon } from "@mui/icons-material";

function TodoItem(props: { todo: Todo; actions: ITodoActions }) {
  const [isChecked, setIsChecked] = useState(false);

  const onChecked = () => {
    setIsChecked(!isChecked);

    props.actions.updateTodo({ ...props.todo, isChecked: !isChecked });
  };

  useEffect(() => {
    setIsChecked(props.todo.isChecked);
  }, [props.todo]);

  return (
    <div>
      <Checkbox
        checked={isChecked}
        onClick={() => onChecked()}
        name="chkIsChecked"
      />
      {props.todo.title}

      <IconButton
        aria-label="delete"
        color="primary"
        onClick={() => props.actions.deleteTodo(props.todo.id)}
      >
        {" "}
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default TodoItem;
