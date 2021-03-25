import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Importing css
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

//Importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importing pages
import Home from "./pages/Home";

function App() {
  return (
      <div>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
        </Router>
        <Footer/>
      </div>
    
  );
}

export default App;
