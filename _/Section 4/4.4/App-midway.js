import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Default.css';

import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about/123">About John</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/about/:userId" render={({match}) => {
              return <h2>About John {match.params.userId}</h2>
            }} />

            <Route path="/about" component={About} />

            <Route path="/contact" component={Contact} />

            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
