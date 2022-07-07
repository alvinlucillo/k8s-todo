import { useState } from "react";
import { IAddTodoAction, Todo } from "../../types";
import { Check as CheckIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const NewTodo = (props: { addTodo: IAddTodoAction }) => {
  const [title, setTitle] = useState<string>("");

  const onTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const onAddTodo = () => {
    props.addTodo(new Todo(4, title, false));
  };

  return (
    <>
      <div>
        <span>Add new todo:</span> &nbsp;
        <input
          type="text"
          name="title"
          onChange={onTitleChange}
          value={title}
        />
        <IconButton
          aria-label="Add"
          color="primary"
          onClick={() => onAddTodo()}
        >
          <CheckIcon />
        </IconButton>
      </div>
    </>
  );
};

export default NewTodo;
