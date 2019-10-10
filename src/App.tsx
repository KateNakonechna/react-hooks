import React, { useState } from "react";
import "./App.css";
import TodoContainer from "./components/todos/TodoContainer";

export interface Todo {
  text: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  return (
    <div className="app">
      <TodoContainer />
    </div>
  );
};

export default App;
