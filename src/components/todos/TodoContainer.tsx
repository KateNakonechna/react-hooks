import React, { useState, useReducer } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoReducer } from "./TodoReducer";

export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

const TodoContainer: React.FC = () => {
  const [state, dispatch] = useReducer(TodoReducer, {
    todos: [],
    currentTodo: { id: 1, text: "", isCompleted: false }
  });

  // const [todos, setTodos] = useState<Todo[]>([
  //   { text: "Learn about React", isCompleted: false },
  //   { text: "Meet friend for lunch", isCompleted: false },
  //   { text: "Build really cool todo app", isCompleted: false }
  // ]);

  const addTodo = (value: Todo) => {
    dispatch({ type: "ADD_TODO", payload: value });
  };

  // const completeTodo = (index: number) => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCompleted = true;
  //   setTodos(newTodos);
  // };

  const removeTodo = (id: number) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });

    // const newTodos = [...todos];
    // newTodos.splice(index, 1);
    // setTodos(newTodos);
  };

  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {state.todos.map((todo: Todo, index: number) => (
          <TodoList
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
