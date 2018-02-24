import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MainArea from './components/MainArea/MainArea';
import AdminArea from './components/AdminArea/AdminArea';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={MainArea}/>
            <Route exact path="/admin" component={AdminArea}/>
          </div>
        </Router>
    );
  }
}

export default App;
