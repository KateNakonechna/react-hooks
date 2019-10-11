import React, { useState, FormEvent } from "react";
import { Todo } from "./TodoContainer";

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
      <input
        type="text"
        className="input"
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
