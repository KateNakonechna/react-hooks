import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

interface User {
  name: string;
  email: string;
}

interface Values {
  users: User[];
}

const initialValues: Values = {
  users: [
    {
      name: "",
      email: ""
    }
  ]
};
const UserForm: React.FC = () => (
  <div>
    <h1>Add users</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={(values: Values) => {
        console.log(values);
      }}
      validationSchema={Yup.object().shape({
        users: Yup.array().of(
          Yup.object().shape({
            name: Yup.string()
              .min(4, "too short")
              .required("Required"),
            email: Yup.string()
              .email()
              .required("Required")
          })
        )
      })}
      render={({ values }) => (
        <Form>
          <FieldArray
            name="users"
            render={({ insert, remove, push }) => (
              <div>
                {values.users.length > 0 &&
                  values.users.map((user, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`users.${index}.name`}>Name</label>
                        <Field
                          name={`users.${index}.name`}
                          placeholder="Kate"
                          type="text"
                        />
                        <ErrorMessage
                          name={`users.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`users.${index}.email`}>Email</label>
                        <Field
                          name={`users.${index}.email`}
                          placeholder="kate@gmail.com"
                          type="email"
                        />
                        <ErrorMessage
                          name={`users.${index}.email`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ name: "", email: "" })}
                >
                  Add user
                </button>
              </div>
            )}
          />
          <button type="submit">Save Users</button>
        </Form>
      )}
    />
  </div>
);

export default UserForm;
