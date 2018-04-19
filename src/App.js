import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
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
                    <h6 className='m-b-0'>LOGO</h6>
                  </NavLink>
                </div>
                <div className='col-md-9 col-xs-12 end-xs'>
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
                  <div className='row'>
                    <div className='col-xs-12'>
                      <h6>LOGO</h6>
                    </div>
                  </div>
                  <div className='space-2' />
                  <div className='row top-xs'>
                    <div className='col-md-4 col-xs-12'>
                      <Link to="/our-work">Our Work</Link>
                      <Link to="/team">Team</Link>
                      <Link to="/careers">Hiring! Join our team</Link>
                      <Link to="/conctact">Contact</Link>
                    </div>
                    <div className='col-md-4 col-xs-12'>
                      <a
                        href='https://www.facebook.com/'
                        target='_blank'
                        rel='noopener noreferrer'>Facebook
                      </a>
                      <a
                        href='https://twitter.com/'
                        target='_blank'
                        rel='noopener noreferrer'>Twitter
                      </a>
                      <a
                        href='https://www.linkedin.com/'
                        target='_blank'
                        rel='noopener noreferrer'>LinkedIn
                      </a>
                    </div>
                    <div className='col-md-4 col-xs-12'>
                      <a
                        href='https://www.medstarhealth.org/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <img
                          src='/images/medstar-logo.png'
                          alt='medstar logo'
                          className='medstar'
                          />
                      </a>
                      <a
                        href='https://www.medstarhealth.org/mhs/our-services/behavioral-health/'
                        target='_blank'
                        rel='noopener noreferrer'>MedStar Psychiatry
                      </a>
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
