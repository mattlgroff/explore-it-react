import React, { Component }  from 'react';
import {Popup, Marker, Map, TileLayer} from 'react-leaflet';
import {Icon} from 'leaflet';
import {Button, Image} from 'react-bootstrap';
import "./index.css";
import foodIcon from '../../assets/icons/foodanddrink.svg';
import bathroomIcon from '../../assets/icons/bathroom.svg';
import shoppingIcon from '../../assets/icons/shopping.svg';
import attractionIcon from '../../assets/icons/attraction.svg';
import axiosHelper from '../../api/axios.js';

class SimpleExample extends Component {
  constructor() {
    super()
    this.state = {
      lat: 32.770844,
      lng: -117.2527572,
      zoom: 18,
      open: true
    };
  }


  isFavoriteThenRemove = (e) => {
    let profile = this.props.profile.sub;
    let poi = e.target.id;

    axiosHelper.removeFavorite(profile, poi)
    .then(results => {
      console.log("Removed from favorites.")
      console.log(results);
    })
    .catch(err => console.error(err));
  };

  addToFavorites = (e) => {
    let profile = this.props.profile.sub;
    let poi = e.target.id;

    axiosHelper.addToFavorites(profile, poi)
    .then(results => {
      console.log("Successfully added to favorites.")
      console.log(results);
      this.showAllFavorites(profile);
    })
    .catch(err => console.error(err));

  };

  showAllFavorites = () => {
    let profile = this.props.profile.sub;
    axiosHelper.showAllFavorites(profile)
    .then(results => {
      console.log(results);
    })
    .catch(err => console.error(err));
  };

  // removeFavorite = (e) => {
  //   let poi = e.target.id;
  //   let profile = this.props.profile.sub;

  //   console.log("Already is a favorite: ");
  //   console.log(this.isFavorite(poi));

  //   axiosHelper.removeFavorite(profile, poi)
  //   .then(results => console.log("Removed from favorites."))
  //   .catch(err => console.error(err));
  // }

  render() {

    const { isAuthenticated } = this.props.auth;

    const position = [this.state.lat, this.state.lng];
    return (
      <Map zoomControl={false} center={position} zoom={this.state.zoom}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
            {this.props.pois.map(poi => {

        let img_src = require(`../../assets/photos/${poi.img_url}`);

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
          //console.log("source: " + source);

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
                  <Button className='btn' id={poi._id} onClick={this.addToFavorites}>Save to Favorites</Button>
                  <Button className='btn' id={poi._id} onClick={this.isFavoriteThenRemove}>Remove Favorite</Button>
                  <br></br>
                  <a target='_blank' href={`https://www.google.com/maps/?daddr=${poi.lat},${poi.long}`}>Directions</a>
                  </div>
                </Popup>
              )
            }

          </Marker>
          );
      }
      )}
      </Map>
    );
  }
}


export default SimpleExample;
