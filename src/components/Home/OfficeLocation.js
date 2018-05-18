import React from 'react';

class OfficeLocation extends React.Component {

  render() {
    return (
      <div className='flex top map-location'>
        <img
          src='/images/icons/pin-purple.svg'
          className='icon-sm'
          alt='Map Pin'/>
        <div>
          <p className='small m-b-half'><b>{this.props.name}</b></p>
          <p className='xs m-b-half'><b>{this.props.name2? this.props.name2 : null}</b></p>
          <p className='xs m-b-0'>{this.props.address}</p>
        </div>
      </div>
    )
  }
}

export default OfficeLocation;
