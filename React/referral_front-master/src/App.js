import "./App.css";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import AuthContainer from "./components/authentication/AuthContainer";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ViewReferrals from './components/user-pages/content-views/ViewReferrals'
import UserLayout from "./components/user-pages/UserLayout";
import Home from "./components/user-pages/content-views/Home"

function App() {
  return (
    <AnimatePresence mode="wait">
      <Router>
        <Switch>
          <Route exact path="/" >
            <AuthContainer />
          </Route>
          <Route path="/user">
          <UserLayout>
              <Switch>
                <Route path="/user/home" component={Home} />
                <Route path="/user/viewreferrals" component={ViewReferrals} />
                <Redirect from="/user" to="/user/home" />
              </Switch>
            </UserLayout>
          </Route>
          <Route path="/view">
            <ViewReferrals />
          </Route>
        </Switch>
      </Router>
    </AnimatePresence>
  );
}

export default App;
