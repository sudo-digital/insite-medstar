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
          <p className='small m-b-0'><b>{this.props.office}</b></p>
          <p className='xs m-b-0'><i>{this.props.office2}</i></p>
          <p className='xs m-b-0'>{this.props.address}</p>
        </div>
      </div>
    )
  }
}

export default OfficeLocation;
