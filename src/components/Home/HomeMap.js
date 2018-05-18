import React from 'react';
import mapboxgl from 'mapbox-gl';
import OfficeLocation from './OfficeLocation'
import schools from '../../data/geoschools.json'

class HomeMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coordinates: [-76.9939, 38.8622]
    };
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3Vkb2RpZ2l0YWwiLCJhIjoiY2pnNTdmN25xNzRpbjJ3bnY0MHR2eHdvZyJ9.-XVfhFTGnfiQHMCIqZd9ng';
    let map = new mapboxgl.Map({
      container: 'locations',
      style: 'mapbox://styles/mapbox/light-v9',
      center: this.state.coordinates,
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

  // does not work because map isn't defined
  componentDidUpdate() {
    map.flyTo({
      center: this.state.coordinates,
      zoom: 15
    });
  }

  flyToStore = (newCoordinates) => {
    console.log(newCoordinates);
    this.setState({
      coordinates: newCoordinates
    })
  }


  renderLocations = () => {
    const s = schools.features;
    return (
      s.map((so) => {
        return (
          <OfficeLocation
            key={so.id}
            name={so.text}
            name2={so.text2}
            address={so.properties.address}
            coordinates={so.geometry.coordinates}
            fly={(newCoordinates) => {this.flyToStore(newCoordinates)}}
            />
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
