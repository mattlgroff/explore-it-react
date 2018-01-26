import React, { Component }  from 'react';
import {Popup, Marker, Map, TileLayer} from 'react-leaflet';
import {Icon} from 'leaflet';
import {Image} from 'react-bootstrap';
import axiosHelper from '../../api/axios.js';
import { browserHistory } from 'react-router';
import cookie from 'react-cookies';
import { Helmet } from 'react-helmet';
import "./map.css";
import "./animate.css"
import POIPanel from '../POIPanel'
import NavbarBottom from '../NavbarBottom'
import foodIcon from '../../assets/icons/foodanddrink.svg';
import bathroomIcon from '../../assets/icons/bathroom.svg';
import shoppingIcon from '../../assets/icons/shopping.svg';
import attractionIcon from '../../assets/icons/attraction.svg';
import footballIcon from '../../assets/icons/football.svg';
import waterIcon from '../../assets/icons/fountain.svg';
import parkingIcon from '../../assets/icons/parking.svg';
import classroomIcon from '../../assets/icons/classroom.svg';
import publictransitIcon from '../../assets/icons/publictransit.svg';
import pegmanIcon from '../../assets/icons/pegman.svg';
const pegman = new Icon({iconUrl: pegmanIcon, iconSize: [32,64], popupAnchor:  [0, -32]});

class ExploreIt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      showFavorites: false,
      displayPanel: false,
      pois: [],
      userFaveList: [],
      favPois: [],
      lat: props.route.lat,
      long: props.route.long,
      gps_lat: 32.8214787,
      gps_long: -117.272888,
      gps: false
    }
  };

  componentDidMount(){
    this.getAllPoi();
    this.isAuthenticated();
  };

  componentWillReceiveProps(nextProps){
    this.setState({
      lat: nextProps.route.lat,
      long: nextProps.route.long
    });
  };

  getAllPoi = () => {
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

  getAllFavPoi = (IDsArray) => {
    axiosHelper.getAllFavoritePois(IDsArray)
    .then(results => {
      this.setState({
        favPois: results.data
      });
      //console.log('favoritePois', this.state.favPois)
    })
    .catch(err => console.error(err));
  };

  isAuthenticated = () => {
    const user_token = cookie.load('user');
    //console.log('user_token', user_token)
    const isAuth = (user_token ? true : false);
    //console.log('is auth false?', isAuth)
    if(isAuth === true){
      this.setState({
        user:user_token,
        isAuthenticated: true
      });
      this.getUserFavoriteList(user_token)
    }
  };

  getUserFavoriteList = (user) => {
    axiosHelper.getUserFavoriteList(user._id)
    .then(results => {
      this.setState({userFaveList: results.data.list});
      //console.log('this.userFaveList',this.state.userFaveList)
      this.getAllFavPoi(this.state.userFaveList)
    })
  };

  removeFavorite = (e) => {
    let userID = this.state.user._id;
    let poiID = e.target.id
    axiosHelper.removeFavorite(userID, poiID)
    .then(results => {
      this.setState({
        userFaveList: results.data.list
      })
      this.getAllFavPoi(results.data.list)
    })
    .catch(err => console.error(err));
  };

  addToFavorites = (e) => {
    let userID = this.state.user._id;
    let poiID = e.target.id
    axiosHelper.addToFavorites(userID, poiID)
    .then(results => {
      this.setState({
        userFaveList: results.data.list
      })
      this.getAllFavPoi(results.data.list)
      this.switchPanel()
    })
    .catch(err => console.error(err));
  };

  showPanel = (e) => {
    e.preventDefault();
    this.setState({
      displayPanel: (this.state.displayPanel ? false : true)
    });
  };

  switchPanel = (e) => {
    e.preventDefault();
    this.setState({
      showFavorites: (this.state.showFavorites ? false : true)
    })
  };

  detailLink = (id) => {
    //console.log(`Going to /detailed/${id}`);
    browserHistory.push(`/detailed/${id}`);
  };

  locate = (e) => {
    if ("geolocation" in navigator) {
      let watchId = navigator.geolocation.watchPosition(position => {
        //console.log("Moved map to different location");
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          gps_lat: position.coords.latitude,
          gps_long: position.coords.longitude
        });

        navigator.geolocation.clearWatch(watchId);
        //console.log("turned off gps")
      });


    } else {
      //console.log("No geolocation");
      /* geolocation IS NOT available */
    }
  };

  displayPois = () => {
    return this.state.showFavorites ? this.state.favPois : this.state.pois;
  };

  renderMarkers = (poi, index) => {
    if(poi.location === this.props.route.location){
      let img_src = `${process.env.REACT_APP_SERVER}${poi.img_url}`;
      let icon_source;

      switch(poi.category){
        case 'Attraction':
        icon_source = new Icon({iconUrl: attractionIcon, iconSize: [32,32], popupAnchor:  [0, -15]});
        break;

        case 'Bathroom':
        icon_source = new Icon({iconUrl: bathroomIcon, iconSize: [32,32], popupAnchor:  [0, -15]});
        break;

        case 'Classroom':
        icon_source = new Icon({iconUrl: classroomIcon, iconSize: [32,32], popupAnchor:  [0, -15]});
        break;

        case 'Public Transit':
        icon_source = new Icon({iconUrl: publictransitIcon, iconSize: [32,32], popupAnchor:  [0, -15]});
        break;

        case 'Food and Drink':
        icon_source = new Icon({iconUrl: foodIcon, iconSize: [32,32], popupAnchor:  [0, -15]});
        break;

        case 'Shopping':
        icon_source = new Icon({iconUrl: shoppingIcon, iconSize: [32,32], popupAnchor:  [0, -15]});
        break;

        case 'Sports':
        icon_source = new Icon({iconUrl: footballIcon, iconSize: [32,32], popupAnchor:  [0, -15]});
        break;

        case 'Drinking Fountain':
        icon_source = new Icon({iconUrl: waterIcon, iconSize: [32,32], popupAnchor:  [0, -15]});
        break;

        case 'Parking':
        icon_source = new Icon({iconUrl: parkingIcon, iconSize: [32,32], popupAnchor:  [0, -15]});
        break;

        default:
        console.error(`Something went wrong. No category ${poi.category} found.`);
        break;
      }
      return  (
        <Marker className='animated fadeInUp' key={poi._id} icon={icon_source} position={[poi.lat,poi.long]} onClick={this.onClick}>
          {this.renderPopups(poi.name, img_src, poi.lat, poi.long, poi._id)}
        </Marker>
      )
    }
  };

  renderPopups = (name, img_src, lat, long, id) => {
    if (this.state.isAuthenticated) {
      return (
        <Popup minWidth={90}>
          <div className='text-center animated fadeIn'>
            <h5 className='animated fadeIn'>{name}</h5>
            <Image className='img img-thumbnail img-responsive animated fadeIn delay-02s' src={img_src} width='200px'></Image>
            <button className="btn animated fadeInUp delay-02s btn-dark pop_btn" onClick={() => {this.detailLink(id)}}>Detailed View</button>

              {
                (this.state.userFaveList.indexOf(id) === -1) && (
                  <button className='btn btn-dark animated fadeInUp delay-03s' id={id} onClick={this.addToFavorites}><img alt='list' className="nav-link img_btn" src='https://exploreit.herokuapp.com/favlist.png'/>Favorite</button>
                )
              }
              {
                (this.state.userFaveList.indexOf(id) !== -1) && (
                  <button className='btn btn-dark animated fadeInUp delay-03s' id={id} onClick={this.removeFavorite}><img alt='list' className="nav-link img_btn" src='https://exploreit.herokuapp.com/favlist.png'/>Unfavorite</button>
                )
              }
            <br></br>
            <a className='animated fadeInUp delay-04s btn' target='_blank' href={`https://www.google.com/maps/?daddr=${lat},${long}`}>Directions<i className="fa fa-map" aria-hidden="true"></i></a>
          </div>
        </Popup>
      );

    }else {

      return (
        // Unauthenticated navigation
        <Popup minWidth={90}>
          <div className='text-center animated fadeIn'>
            <h4 className='animated fadeIn delay-01s'>{name}</h4>
            <Image className='img thumbnail animated fadeIn delay-02s' src={img_src} width='200px'></Image>
              <button className="btn animated fadeInUp delay-02s btn-dark pop_btn" onClick={() => {this.detailLink(id)}}>Detailed View</button>
              <br></br>
              <span className=''>Please Login to add to Favorites.</span>
            <hr></hr>
            <a className='animated fadeInUp delay-03s btn' target='_blank' href={`https://www.google.com/maps/?daddr=${lat},${long}`}>Directions <i className="fa fa-map" aria-hidden="true"></i></a>
          </div>
        </Popup>
      );
    }
  }


  render() {
    return (
      <div>
        <Helmet>
          <title>{this.props.route.name}</title>
        </Helmet>
        <div>
          <div>
            <Map className='animated fadeIn delay-01s' zoomControl={false} center={[this.state.lat,this.state.long]} zoom={this.props.route.zoom}>
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
                url='https://api.mapbox.com/styles/v1/mattlgroff/cjcjws0xj18ea2sptc8iafsu5/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0dGxncm9mZiIsImEiOiJjamMzczFpNTExNWNmMnhwZjFvNGlpdnR4In0.y1gUOwBdSx6lhv_7TcmKJA'
                />
                <Marker className='animated fadeInUp' icon={pegman} position={[this.state.gps_lat,this.state.gps_long]}>
                  <Popup minWidth={90}>
                    <div className='text-center animated fadeIn'>
                      <h4 className='animated fadeIn delay-01s'>You Are Here</h4>
                    </div>
                  </Popup>
                </Marker>
              {
                this.displayPois().map(this.renderMarkers)
              }
            </Map>
          </div>
        </div>
        {
          (this.state.displayPanel) ? <POIPanel className='animated fadeIn delay-02s' showFavorites={this.state.showFavorites} pois={this.displayPois()} location={this.props.route.location}/> :null
        }
        {<NavbarBottom showFavorites={this.state.showFavorites} isAuthenticated={this.state.isAuthenticated} showPanel={this.showPanel} displayPanel={this.state.displayPanel} switchPanel={this.switchPanel} locate={this.locate}/>
      }
      </div>
    );
  }
}


export default ExploreIt;
