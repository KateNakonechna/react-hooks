import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Todo } from "../../interfaces/ITodo";
import "./TodoList.scss";

interface TodoListProps {
  key: number;
  todo: Todo;
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todo,
  completeTodo,
  removeTodo
}) => (
  <div className="root">
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button>
        <ListItemText
          primary={todo.title}
          style={{ textDecoration: todo.completed ? "line-through" : "" }}
        />
        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={() => completeTodo(todo.id)}
        >
          Complete
        </Button>
        <Button
          className="btn"
          variant="contained"
          color="secondary"
          onClick={() => removeTodo(todo.id)}
        >
          x
        </Button>
      </ListItem>
    </List>
    <Divider />
  </div>
);
