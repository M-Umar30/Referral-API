import "./App.css";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import AuthContainer from "./components/authentication/AuthContainer";
import Home from "./components/user-pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Router>
        <Switch>
          <Route exact path="/" >
            <AuthContainer />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AnimatePresence>
  );
}

export default App;
