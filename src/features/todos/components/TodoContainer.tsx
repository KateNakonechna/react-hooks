import React, { useReducer, useEffect } from "react";
import { TodoList } from "./TodoList";
import { TodoReducer } from "../TodoReducer";
import axios from "axios";
import { TodoActionTypes } from "../todoActionTypes";
import { Todo } from "../interfaces/ITodo";
import TodoForm from "./TodoForm";
import { useAPI } from "../hooks/useApi";

const TodoContainer: React.FC = () => {
  const initialState = {
    todos: []
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const savedTodos = useAPI("https://jsonplaceholder.typicode.com/todos");

  useEffect(() => {
    dispatch({
      type: TodoActionTypes.GET_TODOS,
      payload: savedTodos
    });
  }, [savedTodos]);

  const addTodo = (value: Todo) => {
    dispatch({
      type: TodoActionTypes.ADD_TODO,
      payload: value
    });
  };

  const completeTodo = (id: number) => {
    dispatch({ type: TodoActionTypes.TOGGLE_TODO, payload: { id } });
  };

  const removeTodo = async (id: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({ type: TodoActionTypes.REMOVE_TODO, payload: { id } });
  };

  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {state.todos.map((todo: Todo, index: number) => (
          <TodoList
            key={index}
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
