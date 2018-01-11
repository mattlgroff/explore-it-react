import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './Home.css';
import BelmontMap from '../../components/BelmontMap';
import POIPanel from '../../components/POIList';
import FavoriteStar from '../../components/FavoriteStar';
import axiosHelper from '../../api/axios.js';

class Home extends Component {

  state = {
    showFavorites: false,
    pois: [],
    favoritePois: [{
      "_id": "5a56cb237bc81b01bc22c15d",
      "name": "Adrenaline Zone",
      "category": "Attraction",
      "lat": 32.77048375,
      "long": -117.25219317,
      "description": "Harness up, it’s time to conquer the mountain! Our Rock Wall is 30 feet tall and has different routes to the top.",
      "img_url": "adrenzone.jpg"
    },
    {
      "_id": "5a56cb237bc81b01bc22c162",
      "name": "Beach Blaster",
      "category": "Attraction",
      "lat": 32.77039791,
      "long": -117.25175019,
      "description": "One of our most popular rides for adrenaline junkies! This thrilling machine swings passengers 60 feet in the air to 120 degrees in both directions all while spinning",
      "img_url": "beachblaster.jpg"
    },
    {
      "_id": "5a56cb237bc81b01bc22c17a",
      "name": "Belmont Express",
      "category": "Attraction",
      "lat": 32.77036895,
      "long": -117.25184832,
      "description": "All aboard the Belmont Express! This 4-car train carries passengers all around the Park and through the Midway!",
      "img_url": "allaboard.jpg"
    }]
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadPoi();
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  loadPoi = () => {
    console.log("Called loadPoi");
    axiosHelper.getAllPoi()
    .then(results => {
      console.log(results.data);
      this.setState({
        pois: results.data
      })
      console.log("State of Pois:")
      console.log(this.state.pois);
    })
    .catch(err => console.error(err));
  }

  showPanel = () => {
    console.log('Show Panel', this.state.pois);
    this.setState({
      showFavorites: (this.state.showFavorites ? false : true)
    })
  }

  displayPois = () => {
    return this.state.showFavorites ? this.state.favoritePois : this.state.pois;
  }


  render() {

    const { isAuthenticated } = this.props.auth;

    return (
      <div>

        <BelmontMap pois={this.displayPois()} />
        <POIPanel pois={this.displayPois()} />
        <FavoriteStar showPanel={this.showPanel}/>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
              >
              Home
            </Button>
            {
              !isAuthenticated() && (
                <Button
                  id="qsLoginBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.login.bind(this)}
                  >
                  Log In
                </Button>
              )
            }
            {
              isAuthenticated() && (
                <Button
                  id="qsLogoutBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                  >
                  Log Out
                </Button>
              )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default Home;
