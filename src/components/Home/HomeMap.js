import React from 'react';
import ReactMapboxGl, { GeoJSONLayer, Popup } from "react-mapbox-gl";
import School from './School'
import schools from '../../data/geoschools.json'

class HomeMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Thurgood Marshall Academy',
      name2: '',
      address: '2427 Martin Luther King Jr Ave SE, Washington, DC 20020',
      coordinates: [-76.9939, 38.8622]
    };
  }

  flyToSchool = (name, name2, address, coordinates) => {
    this.setState({
      name: name,
      name2: name2,
      address: address,
      coordinates: coordinates
    })
  }

  renderLocations = () => {
    const s = schools.features;
    return (
      s.map((so) => {
        return (
          <School
            key={so.id}
            name={so.text}
            name2={so.text2}
            address={so.properties.address}
            coordinates={so.geometry.coordinates}
            fly={ (coordinates, name, name2, address) => {this.flyToSchool(coordinates, name, name2, address)} } />
        );
      })
    )
  }

  render() {
    const { name, name2, address, coordinates, zoom } = this.state
    const Map = ReactMapboxGl({
      accessToken: 'pk.eyJ1Ijoic3Vkb2RpZ2l0YWwiLCJhIjoiY2pnNTdmN25xNzRpbjJ3bnY0MHR2eHdvZyJ9.-XVfhFTGnfiQHMCIqZd9ng'
    });

    return (
      <div className='container'>
        <div className='row top-xs'>
          <div className='col-md-8 col-xs-12'>
            <Map
              style='mapbox://styles/mapbox/light-v9'
              center={coordinates}
              zoom={[12]}
              className='map'
              movingMethod='flyTo'
              flyToOptions={{ speed: 0.8 }}>

              <GeoJSONLayer
                data={schools}
                symbolLayout={{ 'icon-image': 'marker-15', 'icon-allow-overlap': true }} />

              <Popup coordinates={coordinates} className='containerify'>
                <p className='small bold m-b-half'>{name}</p>
                <p className='xs bold m-b-half'>{name2? name2 : null}</p>
                <p className='xs m-b-0'>{address}</p>
              </Popup>

            </Map>
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
