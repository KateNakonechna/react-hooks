import { Todo } from "./TodoContainer";

export type Actions =
  | { type: "GET_TODOS"; payload: Todo[] }
  | { type: "ADD_TODO"; payload: Todo }
  | {
      type: "REMOVE_TODO";
      payload: {
        id: number;
      };
    }
  | {
      type: "TOGGLE_TODO";
      payload: {
        id: number;
      };
    };

export type State = {
  todos: Todo[];
  currentTodo: Todo;
};

export const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload
      };
    case "ADD_TODO":
      const addedTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: addedTodos
      };
    case "REMOVE_TODO":
      const filteredTodos = state.todos.filter(
        todo => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: filteredTodos
      };
    case "TOGGLE_TODO":
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
