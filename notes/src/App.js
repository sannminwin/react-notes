import React, { useEffect, useState } from "react";
import Note from "./components/Note/Note";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddNote from "./components/AddNote/AddNote";
import Container from "./components/Container/Container";
import './app.scss';
import AddItem from "./components/AddItem/AddItem";
import ViewItem from "./components/ViewItem/ViewItem";
import EditItem from "./components/EditItem/EditItem";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Container} />
        <Route exact path="/add/note" component={AddNote} />
        <Route exact path="/add/item" component={AddItem} />
        <Route exact path="/items/:id" component={ViewItem} />
        <Route exact path="/items/edit/:id" component={EditItem} />
      </Switch>
    </Router>
  );
};
export default App;
