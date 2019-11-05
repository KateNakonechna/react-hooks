import React, { useReducer, useEffect } from "react";
import { TodoReducer } from "../../TodoReducer";
import { useAPI } from "../../hooks/useApi";
import {
  getTodoAction,
  addTodoAction,
  completeTodoAction,
  removeTodoAction
} from "../../todoActionTypes";
import { Todo } from "../../interfaces/ITodo";
import TodoForm from "../TodoForm/TodoForm";
import { TodoList } from "../TodoList/TodoList";
import axios from "axios";
import "./TodoContainer.scss";
import { environment } from "../../../../environment";

const TodoContainer: React.FC = () => {
  const initialState = {
    todos: []
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const savedTodos = useAPI(`${environment.baseUrl}/todos`);

  useEffect(() => {
    dispatch(getTodoAction(savedTodos));
  }, [savedTodos]);

  const addTodo = (value: Todo) => {
    dispatch(addTodoAction(value));
  };

  const completeTodo = (id: number) => {
    dispatch(completeTodoAction(id));
  };

  const removeTodo = async (id: number) => {
    await axios.delete(`${environment.baseUrl}/todos/${id}`);
    dispatch(removeTodoAction(id));
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
