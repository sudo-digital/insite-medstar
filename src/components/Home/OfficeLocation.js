import React from 'react';

class OfficeLocation extends React.Component {

  render() {
    return (
      <div className='flex middle map-location'>
        <img
          src='/images/icons/pin-purple.svg'
          className='icon-sm'
          alt='Map Pin'/>
        <div>
          <h4 className='m-b-0'>{this.props.office}</h4>
          <p className='small m-b-0'>{this.props.address}</p>
        </div>
      </div>
    )
  }
}

export default OfficeLocation;
