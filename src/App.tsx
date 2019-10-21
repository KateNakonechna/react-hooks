import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Loader from "./shared/Loader";
import Navigation from "./shared/Navigation";

const LazyHome = React.lazy(() => import("./features/home/Home"));
const LazyUserForm = React.lazy(() => import("./features/users/UserForm"));
const LazyTodo = React.lazy(() =>
  import("./features/todos/components/TodoContainer")
);

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
