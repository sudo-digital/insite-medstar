import React from 'react';

class Header extends React.Component {

  navClick = (value) => {    
    this.props.navigationChange(value)
  }

  render() {
    return (
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-xs-12'>
              <h6 className='m-b-0'>logo</h6>
            </div>
            <div className='col-md-9 col-xs-12 end-xs'>
              <nav className='center-text-xs'>
                <a onClick={ () => this.navClick('home') }>Home</a>
                <a onClick={ () => this.navClick('ourWork') }>Our Work</a>
                <a onClick={ () => this.navClick('team') }>Team</a>
                <a onClick={ () => this.navClick('contact') }>Contact Us</a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
