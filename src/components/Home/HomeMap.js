import React from 'react';
import mapboxgl from 'mapbox-gl';
import locations from '../../data/schools.json'
import OfficeLocation from './OfficeLocation'

class HomeMap extends React.Component {

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3Vkb2RpZ2l0YWwiLCJhIjoiY2pnNTdmN25xNzRpbjJ3bnY0MHR2eHdvZyJ9.-XVfhFTGnfiQHMCIqZd9ng';
    new mapboxgl.Map({
      container: 'locations',
      style: 'mapbox://styles/sudodigital/cjg589p0804aw2rp68jaex9ja',
      zoom: 14,
      center: [-77.046,38.904]
    });
  }

  renderLocations = () => {
    let eachLocation = locations.map((office) => {
      return office
    })

    return (
      eachLocation.map((office) => {
        return (
          <OfficeLocation
            key={office.name}
            office={office.name}
            office2={office.name2? office.name2 : null}
            address={office.address} />
        );
      })
    )
  }

  render() {
    return (
      <div className='container'>
        <div className='row top-xs'>
          <div className='col-md-8 col-xs-12'>
            <div id='locations' className='map' />
          </div>
          <div className='col-md-4 col-xs-12 office-locaitons'>
            { this.renderLocations() }
          </div>
        </div>
      </div>
    )
  }
}

export default HomeMap;
