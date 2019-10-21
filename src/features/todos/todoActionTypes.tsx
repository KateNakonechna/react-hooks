import { Todo } from "./interfaces/ITodo";

export enum TodoActionTypes {
  GET_TODOS = "GET_TODOS",
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO"
}

export const addTodoAction = (value: Todo) => {
  return {
    type: TodoActionTypes.ADD_TODO,
    payload: value
  };
};

export const completeTodoAction = (id: number) => ({
  type: TodoActionTypes.TOGGLE_TODO,
  payload: { id }
});

export const removeTodoAction = (id: number) => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload: { id }
});

export const getTodoAction = (todos: Todo[]) => ({
  type: TodoActionTypes.GET_TODOS,
  payload: todos
});
