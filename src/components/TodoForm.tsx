import React, { useState, FormEvent } from "react";

interface FormProps {
  addTodo: (text: string) => void;
}

export const TodoForm: React.FC<FormProps> = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </form>
  );
};
