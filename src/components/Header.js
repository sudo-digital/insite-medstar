import React from 'react';

class Header extends React.Component {

  navClick = (value) => {
    this.props.navigationChange(value)
  }

  render() {
    const active = this.props.active
    return (
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-xs-12'>
              <h6 className='m-b-0'>logo</h6>
            </div>
            <div className='col-md-9 col-xs-12 end-xs'>
              <nav className='center-text-xs'>
                <a
                  onClick={ () => this.navClick('home') }
                  href='/home'
                  className={active === 'home'? 'active' : null}>
                  Home
                </a>
                <a
                  onClick={ () => this.navClick('ourWork') }
                  href='/our-work'
                  className={active === 'ourWork'? 'active' : null}>
                  Our Work
                </a>
                <a
                  onClick={ () => this.navClick('team') }
                  href='/team'
                  className={active === 'team'? 'active' : null}>
                  Team
                </a>
                <a
                  onClick={ () => this.navClick('contact') }
                  href='/contact'
                  className={active === 'contact'? 'active' : null}>
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
