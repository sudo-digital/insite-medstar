import React from 'react';
import { NavLink } from 'react-router-dom';

class Banner extends React.Component {
  render() {
    return (
      <NavLink
        activeClassName='active-banner'
        className='banner'
        to='/covid-19'>
        Click here for the WISE Center's COVID-19 Resource Center
      </NavLink>
    )
  }
}

export default Banner;
