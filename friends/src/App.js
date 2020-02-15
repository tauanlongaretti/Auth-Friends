import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={Login} />
      </div>
    </Router>
  );
}

export default App;
