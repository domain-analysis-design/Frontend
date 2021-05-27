import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Select from "./pages/Select";
import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Landing} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/Select" component={Select} exact></Route>
        <Route path="/main" component={Main} exact></Route>
        <Route path="/main/:id" component={Select} exact></Route>
      </Switch>
    </>
  );
};

export default App;
