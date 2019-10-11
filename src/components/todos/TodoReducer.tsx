import { Todo } from "./TodoContainer";

type Actions =
  | { type: "ADD_TODO"; payload: Todo }
  | {
      type: "REMOVE_TODO";
      payload: {
        id: number;
      };
    };

type State = {
  todos: Todo[];
  currentTodo: Todo;
};

export const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
