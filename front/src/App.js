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
        <div class="Header">
        <Header />
        </div>
        <div class="container">
          <div class="main-box">
          <Route path="/" component={MainWindow} />
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
