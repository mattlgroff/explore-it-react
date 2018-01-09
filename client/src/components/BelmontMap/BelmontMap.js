import React, { Component }  from 'react';
import {Popup, Marker, Map, TileLayer} from 'react-leaflet';
import {Icon} from 'leaflet';
import {Image} from 'react-bootstrap';
import "./index.css";
import foodIcon from '../../assets/icons/foodanddrink.svg';
import bathroomIcon from '../../assets/icons/bathroom.svg';
import shoppingIcon from '../../assets/icons/shopping.svg';
import attractionIcon from '../../assets/icons/attraction.svg';

class SimpleExample extends Component {
  constructor() {
    super()
    this.state = {
      lat: 32.770844,
      lng: -117.2527572,
      zoom: 19,
      open: true
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    console.log('map is rendered')
    return (
      <Map center={position} zoom={this.state.zoom}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
            {this.props.pois.map(poi => {

        let source;

          switch(poi.category){
            case 'Attraction':
            source = new Icon({iconUrl: attractionIcon, iconSize: [32,32]});
            break;

            case 'Bathroom':
            source = new Icon({iconUrl: bathroomIcon, iconSize: [32,32]});
            break;

            case 'Food and Drink':
            source = new Icon({iconUrl: foodIcon, iconSize: [32,32]});
            break;

            case 'Shopping':
            source = new Icon({iconUrl: shoppingIcon, iconSize: [32,32]});
            break;

            default:
            break;
          }
          console.log("source: " + source);

        return (
          <Marker key={poi._id} icon={source} position={[poi.lat,poi.long]} onClick={this.onClick}>

            <Popup minWidth={90}>
              <div className='text-center'>
              <h4>{poi.name}</h4>
              <Image className='img thumbnail' src={poi.img_url} width='200px'></Image>
              <span>Description goes here!</span><br></br>
              <a href={`https://www.google.com/maps/?daddr=${poi.lat},${poi.long}`}>Directions</a>
              </div>
            </Popup>
          </Marker>
          );
      }
      )}
      </Map>
    );
  }
}


export default SimpleExample;
