import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

export interface Todo {
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoList key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
