import React from 'react';
import mapboxgl from 'mapbox-gl';
import locations from '../../data/schools.json'
import OfficeLocation from './OfficeLocation'
import schools from '../../data/sweetgreen.geojson'

class HomeMap extends React.Component {

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3Vkb2RpZ2l0YWwiLCJhIjoiY2pnNTdmN25xNzRpbjJ3bnY0MHR2eHdvZyJ9.-XVfhFTGnfiQHMCIqZd9ng';
    let map = new mapboxgl.Map({
      container: 'locations',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-77.034084, 38.909671],
      zoom: 14
    });

    map.on('load', e => {
      map.addLayer({
        id: 'locations',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: schools
        },
        layout: {
          'icon-image': 'marker-15',
          'icon-allow-overlap': true,
        }
      });
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
