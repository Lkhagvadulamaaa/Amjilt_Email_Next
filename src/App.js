import React from "react";
import Home from "./container/home/home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Router>
        <Route path="/" components={Home} />
      </Router> */}
    </div>
  );
}

export default App;
