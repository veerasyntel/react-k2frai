import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Container from './Container'
import './style.css';

class App extends Component { 
  render() {
    return (
      <Router>        
        <Switch>
          <Route exact path='/' component={Container}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
        </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
