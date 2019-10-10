import React, { useState } from "react";
import { Todo } from "../App";

interface TodoListProps {
  key: number;
  index: number;
  todo: Todo;
}

export const TodoList: React.FC<TodoListProps> = ({ todo }) => (
  <div className="todo">{todo.text}</div>
);
