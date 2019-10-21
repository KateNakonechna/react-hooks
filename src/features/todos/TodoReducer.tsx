import { TodoActionTypes } from "./todoActionTypes";
import { Todo } from "./interfaces/ITodo";

export type Actions =
  | { type: TodoActionTypes.GET_TODOS; payload: Todo[] }
  | { type: TodoActionTypes.ADD_TODO; payload: Todo }
  | {
      type: TodoActionTypes.REMOVE_TODO;
      payload: {
        id: number;
      };
    }
  | {
      type: TodoActionTypes.TOGGLE_TODO;
      payload: {
        id: number;
      };
    };

export type State = {
  todos: Todo[];
};

export const TodoReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case TodoActionTypes.GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case TodoActionTypes.ADD_TODO:
      const addedTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: addedTodos
      };
    case TodoActionTypes.REMOVE_TODO:
      const filteredTodos = state.todos.filter(
        todo => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: filteredTodos
      };
    case TodoActionTypes.TOGGLE_TODO:
      const completedTodo = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }

        return todo;
      });

      return {
        ...state,
        todos: completedTodo
      };

    default:
      return state;
  }
};
