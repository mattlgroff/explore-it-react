import React, { Component }  from 'react';
import {Popup, Marker, Map, TileLayer} from 'react-leaflet';
import {Icon} from 'leaflet';
import {Button, Image} from 'react-bootstrap';
import "./map.css";
// import foodIcon from '../../assets/icons/foodanddrink.svg';
// import bathroomIcon from '../../assets/icons/bathroom.svg';
// import shoppingIcon from '../../assets/icons/shopping.svg';
// import attractionIcon from '../../assets/icons/attraction.svg';
// import footballIcon from '../../assets/icons/football.svg';
// import waterIcon from '../../assets/icons/fountain.svg';
// import parkingIcon from '../../assets/icons/parking.svg';
// import axiosHelper from '../../api/axios.js';

class ExploreIt extends Component {
  constructor() {
    super()

    //Replace these with Props if you can! Otherwise we can do two pages.
    this.state = {
      lat: 32.770844,
      lng: -117.2527572,
      zoom: 18,
      open: true
    };
  }


  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <Map zoomControl={false} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
          url='https://api.mapbox.com/styles/v1/mattlgroff/cjcjws0xj18ea2sptc8iafsu5/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0dGxncm9mZiIsImEiOiJjamMzczFpNTExNWNmMnhwZjFvNGlpdnR4In0.y1gUOwBdSx6lhv_7TcmKJA'
          />
      </Map>
    );
  }
}


export default ExploreIt;
