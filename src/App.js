import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import OurWork from './components/OurWork';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Router>
          <div className='body'>
            <Route exact path="/" component={Home} />
            <Route path="/our-work" component={OurWork} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
