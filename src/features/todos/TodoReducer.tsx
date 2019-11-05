import { TodoActionTypes, TodoActions } from "./todoActionTypes";
import { Todo } from "./interfaces/ITodo";

export type State = {
  todos: Todo[];
};

export const TodoReducer = (state: State, action: TodoActionTypes): State => {
  switch (action.type) {
    case TodoActions.GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case TodoActions.ADD_TODO:
      const addedTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: addedTodos
      };
    case TodoActions.REMOVE_TODO:
      const filteredTodos = state.todos.filter(
        todo => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: filteredTodos
      };
    case TodoActions.TOGGLE_TODO:
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
