import React, { Component }  from 'react';
import {Popup, Marker, Map, TileLayer} from 'react-leaflet';
import {Icon} from 'leaflet';
import {Button, Image} from 'react-bootstrap';
import "./index.css";
import foodIcon from '../../assets/icons/foodanddrink.svg';
import bathroomIcon from '../../assets/icons/bathroom.svg';
import shoppingIcon from '../../assets/icons/shopping.svg';
import attractionIcon from '../../assets/icons/attraction.svg';
import footballIcon from '../../assets/icons/football.svg';
import waterIcon from '../../assets/icons/fountain.svg';
import parkingIcon from '../../assets/icons/parking.svg';
import classroomIcon from '../../assets/icons/classroom.svg';
import publictransitIcon from '../../assets/icons/publictransit.svg';
import axiosHelper from '../../api/axios.js';

class ExploreMap extends Component {
  constructor() {
    console.log(process.env.REACT_APP_MAP_LAT);
    super()
    this.state = {
      lat: parseFloat(process.env.REACT_APP_MAP_LAT),
      lng: parseFloat(process.env.REACT_APP_MAP_LONG),
      zoom: parseInt(process.env.REACT_APP_MAP_ZOOM, 10),
      open: true
    };
  }


  isFavoriteThenRemove = (e) => {
    let profile = this.props.profile.sub;
    let poi = e.target.id
    axiosHelper.removeFavorite(profile, poi)
    .then(results => {
      this.props.getUserFavoriteList(this.props.profile)
    })
    .catch(err => console.error(err));
  };

  addToFavorites = (e) => {
    let profile = this.props.profile.sub;
    let poi = e.target.id

    axiosHelper.addToFavorites(profile, poi)
    .then(results => {
      // call getUserFavoriteList
      this.props.getUserFavoriteList(this.props.profile)
      this.props.showPanel()
    })
    .catch(err => console.error(err));

  };

  render() {

    const { isAuthenticated } = this.props.auth;

    const position = [this.state.lat, this.state.lng];
    return (
      <Map zoomControl={false} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
          url='https://api.mapbox.com/styles/v1/mattlgroff/cjcjws0xj18ea2sptc8iafsu5/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0dGxncm9mZiIsImEiOiJjamMzczFpNTExNWNmMnhwZjFvNGlpdnR4In0.y1gUOwBdSx6lhv_7TcmKJA'
          />
        {
          // eslint-disable-next-line
          this.props.pois.map(poi => {
            if(poi.location !== process.env.REACT_APP_LOCATION){
              //Ignore locations not being used by this map.
            }
            else{

              let img_src = require(`../../assets/photos/${poi.img_url}`);

              let source;

              switch(poi.category){
                case 'Classroom':
                source = new Icon({iconUrl: classroomIcon, iconSize: [32,32]});
                break;

                case 'Public Transit':
                source = new Icon({iconUrl: publictransitIcon, iconSize: [32,32]});
                break;

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

                case 'Sports':
                source = new Icon({iconUrl: footballIcon, iconSize: [32,32]});
                break;

                case 'Drinking Fountain':
                source = new Icon({iconUrl: waterIcon, iconSize: [32,32]});
                break;

                case 'Parking':
                source = new Icon({iconUrl: parkingIcon, iconSize: [32,32]});
                break;

                default:
                console.error("Something went wrong. No category found.");
                break;
              }

              return (
                <Marker key={poi._id} icon={source} position={[poi.lat,poi.long]} onClick={this.onClick}>
                  {
                    !isAuthenticated() && (
                      <Popup minWidth={90}>
                        <div className='text-center'>
                          <h4>{poi.name}</h4>
                          <Image className='img thumbnail' src={img_src} width='200px'></Image>
                          <br></br>
                          Please Login to add to Favorites.
                          <br></br>
                          <a target='_blank' href={`https://www.google.com/maps/?daddr=${poi.lat},${poi.long}`}>Directions</a>
                        </div>
                      </Popup>
                    )
                  }
                  {
                    isAuthenticated() && (
                      <Popup minWidth={90}>
                        <div className='text-center'>
                          <h4>{poi.name}</h4>
                          <Image className='img thumbnail' src={img_src} width='200px'></Image>
                          <br></br>
                          {
                            (this.props.poisList.indexOf(poi._id) === -1) && (
                              <Button className='btn' id={poi._id} onClick={this.addToFavorites}>Save to Favorites</Button>
                            )
                          }
                          {
                            (this.props.poisList.indexOf(poi._id) !== -1) && (
                              <Button className='btn' id={poi._id} onClick={this.isFavoriteThenRemove}>Remove Favorite</Button>
                            )
                          }
                          <br></br>
                          <a target='_blank' href={`https://www.google.com/maps/?daddr=${poi.lat},${poi.long}`}>Directions</a>
                        </div>
                      </Popup>
                    )
                  }

                </Marker>
              );
            }//End Else.
          }
        )}
      </Map>
    );
  }
}


export default ExploreMap;
