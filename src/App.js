import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import OurWork from './components/OurWork';
import Team from './components/Team';
import Contact from './components/Contact';

class App extends Component {

  render() {
    return (
      <Router>
        <div className='body'>
          <header>
            <div className='container'>
              <div className='row'>
                <div className='col-md-3 col-xs-12'>
                  <NavLink
                    to='/'
                    activeClassName='active'>
                    <h6 className='m-b-0'>Home</h6>
                  </NavLink>
                </div>
                <div className='col-md-9 col-xs-12 end-xs'>
                  <nav className='center-text-xs'>
                    <NavLink
                      exact to='/'>Home
                    </NavLink>
                    <NavLink
                      to='/our-work'
                      activeClassName='active'>Our Work
                    </NavLink>
                    <NavLink
                      to='/team'
                      activeClassName='active'>Team
                    </NavLink>
                    <NavLink
                      to='/contact'
                      activeClassName='active'>Contact
                    </NavLink>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/our-work'} component={OurWork} />
          <Route exact path={'/team'} component={Team} />
          <Route exact path={'/contact'} component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
