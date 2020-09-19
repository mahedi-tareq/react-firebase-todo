import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import EmplyeForm from "./components/EmplyeForm";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import UpdateForm from "./components/UpdateForm";

export default function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route exact path="/add-new" component={EmplyeForm} />
        <Route exact path="/update-todo" component={UpdateForm} />
      </Switch>
    </>
  );
}
