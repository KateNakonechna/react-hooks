import { Todo } from "./interfaces/ITodo";

export enum TodoActions {
  GET_TODOS = "GET_TODOS",
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO"
}

interface getTodoAction {
  type: TodoActions.GET_TODOS;
  payload: Todo[];
}

interface removeTodoAction {
  type: TodoActions.REMOVE_TODO;
  payload: {
    id: number;
  };
}

interface addTodoAction {
  type: TodoActions.ADD_TODO;
  payload: Todo;
}

interface completeTodoAction {
  type: TodoActions.TOGGLE_TODO;
  payload: {
    id: number;
  };
}

export type TodoActionTypes =
  | getTodoAction
  | addTodoAction
  | removeTodoAction
  | completeTodoAction;

export const getTodoAction = (todos: Todo[]): TodoActionTypes => ({
  type: TodoActions.GET_TODOS,
  payload: todos
});

export const addTodoAction = (value: Todo): TodoActionTypes => {
  return {
    type: TodoActions.ADD_TODO,
    payload: value
  };
};

export const completeTodoAction = (id: number): TodoActionTypes => ({
  type: TodoActions.TOGGLE_TODO,
  payload: { id }
});

export const removeTodoAction = (id: number): TodoActionTypes => ({
  type: TodoActions.REMOVE_TODO,
  payload: { id }
});
