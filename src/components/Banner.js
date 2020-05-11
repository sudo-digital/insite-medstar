import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <div className='row'>
          <div className='col-xs-12'>
            <a className='banner'>
              <img src='images/icons/phone.svg' />
              <div>
                <b>{this.props.copyOne}</b>
                <br/>
                {this.props.copyTwo}
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner;
