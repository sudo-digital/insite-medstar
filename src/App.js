import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import Home from './components/Home';
import OurWork from './components/OurWork';
import Team from './components/Team';
import Contact from './components/Contact';
import './app.css'

class App extends Component {

  render() {
    return (
      <Router>
        <div className='body'>
          <header>
            <div className='container'>
              <div className='row middle-xs'>
                <div className='col-md-3 col-xs-12'>
                  <NavLink
                    to='/'
                    activeClassName='active'>
                    <img
                      src='/images/logo/csw-logo-light.svg'
                      className='logo'
                      alt='WISE Logo'
                      />
                  </NavLink>
                </div>
                <div className='col-md-3 col-xs-12'>
                  <img
                    src='/images/medstar-logo.png'
                    className='medstar'
                    alt='Medstar Health'
                    />
                </div>
                <div className='col-md-6 col-xs-12 end-xs'>
                  <nav className='center-text-xs right-text-md'>
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
            <div className='purple-bg footer'>
              <div className='container'>
                <div className='pad-container-sm'>

                  <div className='row top-xs'>
                    <div className='col-md-offset-2 col-md-4 col-xs-12 m-b-1-xs'>
                      <img
                        src='/images/logo/csw-logo-light.svg'
                        className='logo'
                        alt='Center for Wellbeing Logo' />
                    </div>

                    <div className='col-md-3 col-xs-12'>
                      <Link to="/our-work">Our Work</Link>
                      <Link to="/team">Team</Link>
                      <Link to="/conctact">Contact</Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
