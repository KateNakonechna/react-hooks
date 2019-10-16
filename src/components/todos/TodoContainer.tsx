import React, { useState, useReducer, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoReducer } from "./TodoReducer";
import axios from "axios";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useAPI = (endpoint: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(endpoint);
    setData(response.data);
  };

  return data;
};

const TodoContainer: React.FC = () => {
  const [state, dispatch] = useReducer(TodoReducer, {
    todos: [],
    currentTodo: {
      userId: 1,
      id: 1,
      title: "",
      completed: false
    }
  });

  const savedTodos = useAPI("https://jsonplaceholder.typicode.com/todos");

  useEffect(() => {
    dispatch({
      type: "GET_TODOS",
      payload: savedTodos
    });
  }, [savedTodos]);

  const addTodo = (value: Todo) => {
    dispatch({ type: "ADD_TODO", payload: value });
  };

  const completeTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  const removeTodo = async (id: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({ type: "REMOVE_TODO", payload: { id } });
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
            completeTodo={completeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
