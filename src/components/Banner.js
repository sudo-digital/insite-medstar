import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Banner extends React.Component {

  copy = () => {
    if (this.props.copyTwo) {
      return (
        <a className='banner'>
          <img
            src='images/icons/phone.svg'
            className='default'
            />
          {this.props.copyOne}
          <br/>
          {this.props.copyTwo}
        </a>
      )
    } else {
      return (
        <a className='banner'>
          <img
            src='/images/phone.svg'
            className='default'
            />
          {this.props.copy}
        </a>
      )
    }
  }
  render() {
    return (
      <div className='container full'>
        <Link
          strict='true'
          to='/contact/'
          className='row banner middle-xs'>
          <div className='col-md-1 col-xs-12'>
            <img src='images/icons/phone.svg' alt='phone' />
          </div>
          <div className='col-md-11 col-xs-12'>
            <div>
              <b>{this.props.copyOne}</b>
              <br/>
              {this.props.copyTwo}
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Banner;
