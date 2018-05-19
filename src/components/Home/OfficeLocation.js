import React from 'react';

class OfficeLocation extends React.Component {

  handleClick = (name, name2, address, coordinates) => {
    this.props.fly(name, name2, address, coordinates)
  }

  render() {
    const { name, name2, address, coordinates } = this.props
    return (
      <div className='flex top map-location' onClick={() => this.handleClick(name, name2, address, coordinates)}>
        <img
          src='/images/icons/pin-purple.svg'
          className='icon-sm'
          alt='Map Pin'/>
        <div>
          <p className='small m-b-half'><b>{name}</b></p>
          <p className='xs m-b-half'><b>{name2? name2 : null}</b></p>
          <p className='xs m-b-0'>{address}</p>
        </div>
      </div>
    )
  }
}

export default OfficeLocation;
