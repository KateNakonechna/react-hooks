import React, { useState, FormEvent } from "react";
import { Todo } from "./TodoContainer";
import TextField from "@material-ui/core/TextField";

interface FormProps {
  addTodo: (value: Todo) => void;
}

export const TodoForm: React.FC<FormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<Todo>({
    userId: 1,
    id: 1,
    title: "",
    completed: false
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue({ userId: 1, id: 1, title: "", completed: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        className="input"
        margin="normal"
        variant="filled"
        id="filled-name"
        label="Name"
        defaultValue="Todo"
        onChange={event =>
          setValue({
            userId: 1,
            id: Date.now(),
            title: event.target.value,
            completed: false
          })
        }
      />
    </form>
  );
};
