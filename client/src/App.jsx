import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.css';
import Home from './components/Home';
import Navbar from './components/Nav';
import Register from './components/Register';
import EducationArticle from './components/EducationArticle';
import LiveSession from "./components/LiveSession";
import SigninModal from "./components/SigninModal";
import Student from "./components/Student";
import StudentLiveSession from "./components/StudentLiveSession";

class App extends Component {
  

  render() {
    return (
    <Router>
      <div className="App">     
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/educationarticle" component={EducationArticle} />
        <Route path="/livesession" component={LiveSession} />
        <Route path="/signin" component={SigninModal} />
        <Route path="/studentarticle" component={Student} />
        <Route path="/studentlivesession" component={StudentLiveSession} />
      </div>
    </Router>
    );
  }
}

export default App;
