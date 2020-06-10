import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import ProctectedRoute from "./components/ProtectedRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="links">
      <Link className="link" to="/login">Login</Link>
      <Link className="link" to="/protected">Friends List</Link>
      </div>
      <div className="App">
        <Switch>
          <ProctectedRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
