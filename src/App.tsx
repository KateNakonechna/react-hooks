import React, { useState, Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import TodoContainer from "./features/todos/TodoContainer";
import UserForm from "./features/users/UserForm";
import Loader from "./shared/Loader";
import Navigation from "./shared/Navigation";

export interface Todo {
  text: string;
  isCompleted: boolean;
}

const LazyHome = React.lazy(() => import("./features/home/Home"));
const LazyUserForm = React.lazy(() => import("./features/users/UserForm"));
const LazyTodo = React.lazy(() => import("./features/todos/TodoContainer"));

const App: React.FC = () => (
  <Router>
    <Navigation />
    <React.Suspense fallback={<Loader />}>
      <Route exact path="/" component={LazyHome} />
      <Route path="/home" component={LazyHome} />
      <Route path="/users" component={LazyUserForm} />
      <Route path="/todo" component={LazyTodo} />
    </React.Suspense>
  </Router>
);

export default App;
