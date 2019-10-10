import React, { useState, FormEvent } from "react";
import { Todo } from "./TodoContainer";

interface FormProps {
  addTodo: (value: Todo) => void;
}

export const TodoForm: React.FC<FormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<Todo>({ text: "", isCompleted: false });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue({ text: "", isCompleted: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        onChange={event =>
          setValue({ text: event.target.value, isCompleted: false })
        }
      />
    </form>
  );
};
