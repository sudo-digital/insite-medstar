import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import OurWork from './components/OurWork';
import Team from './components/Team';
import Resources from './components/Resources';
import Contact from './components/Contact';
import './sass/app.sass';
import './mapbox.css';

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
                      to='/resources'
                      activeClassName='active'>Resources
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
          <Route exact path={'/resources'} component={Resources} />
          <Route exact path={'/contact'} component={Contact} />
          <footer>
            <div className='container'>
              <div className='pad-container-sm'>
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
                        to='/resources'
                        activeClassName='active'>Resources
                      </NavLink>
                      <NavLink
                        to='/contact'
                        activeClassName='active'>Contact
                      </NavLink>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className='sub-footer' />
        </div>
      </Router>
    );
  }
}

export default App;
