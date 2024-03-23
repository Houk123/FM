import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import MainWindow from "./components/MainWindow";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" component={MainWindow} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
