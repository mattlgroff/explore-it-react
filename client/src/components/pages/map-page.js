import React, { Component }  from 'react';
import {Popup, Marker, Map, TileLayer} from 'react-leaflet';
import {Icon} from 'leaflet';
import {Image} from 'react-bootstrap';
import axiosHelper from '../../api/axios.js';
import cookie from 'react-cookies';
import "./map.css";
import foodIcon from '../../assets/icons/foodanddrink.svg';
import bathroomIcon from '../../assets/icons/bathroom.svg';
import shoppingIcon from '../../assets/icons/shopping.svg';
import attractionIcon from '../../assets/icons/attraction.svg';
import footballIcon from '../../assets/icons/football.svg';
import waterIcon from '../../assets/icons/fountain.svg';
import parkingIcon from '../../assets/icons/parking.svg';
import classroomIcon from '../../assets/icons/classroom.svg';
import publictransitIcon from '../../assets/icons/publictransit.svg';

class ExploreIt extends Component {
  constructor() {
    super();
    this.state = {
      pois: []
    }
  };

  loadPoi = () => {
    axiosHelper.getAllPoi()
    .then(results => {
      this.setState({
        pois: results.data
      })
    })
    .catch(err => {
      console.error(err)
    });
  };

  componentDidMount(){
    this.loadPoi();
  }

  isAuthenticated = () => {
    const user_token = cookie.load('user');

    const isAuth = (user_token ? true : false);

    return isAuth;
  };

  renderPopups(name, img_src, lat, long, id) {
    if (this.isAuthenticated) {
      return (
        <Popup minWidth={90}>
          <div className='text-center'>
            <h4>{name}</h4>
            <Image className='img thumbnail' src={img_src} width='200px'></Image>
            <br></br>
            You are logged in.
            <br></br>
            <a target='_blank' href={`https://www.google.com/maps/?daddr=${lat},${long}`}>Directions</a>
          </div>
        </Popup>
      );
      
    }else {

      return (
        // Unauthenticated navigation
        <Popup minWidth={90}>
          <div className='text-center'>
            <h4>{name}</h4>
            <Image className='img thumbnail' src={img_src} width='200px'></Image>
            <br></br>
            Please Login to add to Favorites.
            <br></br>
            <a target='_blank' href={`https://www.google.com/maps/?daddr=${lat},${long}`}>Directions</a>
          </div>
        </Popup>
      );
    }
  }


  render() {
    const position = [this.props.route.lat, this.props.route.long];

    const testIcon = new Icon({iconUrl: attractionIcon, iconSize: [32,32]});

    return (
      <Map zoomControl={false} center={position} zoom={this.props.route.zoom}>
        <Helmet>
          <title>{this.props.route.name}</title>
        </Helmet>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
          url='https://api.mapbox.com/styles/v1/mattlgroff/cjcjws0xj18ea2sptc8iafsu5/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0dGxncm9mZiIsImEiOiJjamMzczFpNTExNWNmMnhwZjFvNGlpdnR4In0.y1gUOwBdSx6lhv_7TcmKJA'
          />
          <Marker key={1} icon={testIcon} position={[this.props.route.lat,this.props.route.long]} onClick={this.onClick}>
          {this.renderPopups("Name", `${process.env.REACT_APP_SERVER}adrenzone.jpg`, this.props.route.lat, this.props.route.long, 1)}
          </Marker>
          {
          this.state.pois.forEach(poi => {
            if(poi.location !== this.props.route.location){
              //console.log(`POI Location Skipped: ${poi.location}`)
              //Ignore locations not being used by this map.
            }
            else{

              let img_src = `${process.env.REACT_APP_SERVER}${poi.img_url}`;
              let icon_source;

              switch(poi.category){
                case 'Attraction':
                icon_source = new Icon({iconUrl: attractionIcon, iconSize: [32,32]});
                break;

                case 'Bathroom':
                icon_source = new Icon({iconUrl: bathroomIcon, iconSize: [32,32]});
                break;

                case 'Classroom':
                icon_source = new Icon({iconUrl: classroomIcon, iconSize: [32,32]});
                break;

                case 'Public Transit':
                icon_source = new Icon({iconUrl: publictransitIcon, iconSize: [32,32]});
                break;

                case 'Food and Drink':
                icon_source = new Icon({iconUrl: foodIcon, iconSize: [32,32]});
                break;

                case 'Shopping':
                icon_source = new Icon({iconUrl: shoppingIcon, iconSize: [32,32]});
                break;

                case 'Sports':
                icon_source = new Icon({iconUrl: footballIcon, iconSize: [32,32]});
                break;

                case 'Drinking Fountain':
                icon_source = new Icon({iconUrl: waterIcon, iconSize: [32,32]});
                break;

                case 'Parking':
                icon_source = new Icon({iconUrl: parkingIcon, iconSize: [32,32]});
                break;

                default:
                console.error(`Something went wrong. No category ${poi.category} found.`);
                break;
              }

              let marker = 
                <Marker key={poi._id} icon={icon_source} position={[poi.lat,poi.long]} onClick={this.onClick}>
                  {this.renderPopups(poi.name, img_src, poi.lat, poi.long, poi._id)}
                </Marker>;

              console.log(marker);

              return (marker);
            }//End Else.
          }
        )}
      </Map>
    );
  }
}


export default ExploreIt;
