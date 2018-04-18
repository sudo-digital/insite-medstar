import React from 'react';
import mapboxgl from 'mapbox-gl';
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

  render() {
    return (
      <div className='container full'>
        <div className='row top-xs'>
          <div className='col-md-7 col-xs-12'>
            <div id='locations' className='map' />
          </div>
          <div className='col-md-5 col-xs-12'>
            <OfficeLocation
              office={'Name of the office'}
              address={'2021 L St NW, Washington, DC 20036'} />
            <OfficeLocation
              office={'Name of the office'}
              address={'2021 L St NW, Washington, DC 20036'} />
            <OfficeLocation
              office={'Name of the office'}
              address={'2021 L St NW, Washington, DC 20036'} />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeMap;
