import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Importing css
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

//Importing components
import Navbar from "./components/Navbar";

// Importing pages
import Home from "./pages/Home";

function App() {
  return (
      <div>
        <Router>
          <Navbar />
          <Home />
        </Router>
      </div>
    
  );
}

export default App;
