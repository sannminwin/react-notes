import React, { useEffect, useState } from "react";
import Note from "./components/Note/Note";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddNote from "./components/AddNote/AddNote";
import Container from "./components/Container/Container";
import './app.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Container} />
        <Route exact path="/add/note" component={AddNote} />
      </Switch>
    </Router>
  );
};
export default App;
