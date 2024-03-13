import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormDemo from "./pages/demo";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Route path="/" component={FormDemo} />
      </Router>
    </div>
  );
};

export default App;
