import React from "react";
import { Formik, Field, Form, FormikActions } from "formik";
import { Todo } from "../../interfaces/ITodo";
import "./TodoForm.scss";

interface FormProps {
  addTodo: (value: Todo) => void;
}

interface Values {
  todo: string;
}

const TodoForm: React.SFC<FormProps> = ({ addTodo }) => (
  <div>
    <h1>Create Todo</h1>
    <Formik
      initialValues={{
        todo: ""
      }}
      onSubmit={(value: Values, { resetForm }: FormikActions<Values>) => {
        addTodo({
          userId: 1,
          id: Date.now(),
          title: value.todo,
          completed: false
        });
        resetForm();
      }}
      render={() => (
        <Form className="form">
          <label htmlFor="todo">Todo Title</label>
          <Field id="todo" name="todo" placeholder="Todo" />
          <button type="submit">Add</button>
        </Form>
      )}
    />
  </div>
);

export default TodoForm;
