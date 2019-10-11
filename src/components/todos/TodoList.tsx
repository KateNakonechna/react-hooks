import React, { useState } from "react";
import { Todo } from "./TodoContainer";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

interface TodoListProps {
  key: number;
  index: number;
  todo: Todo;
  // completeTodo: (index: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todo,
  index,
  // completeTodo,
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
          variant="contained"
          color="primary"
          // onClick={() => completeTodo(index)}
        >
          Complete
        </Button>
        <Button
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
