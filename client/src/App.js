import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import BelmontMap from './components/BelmontMap';
import POIPanel from './components/POIList';
import axiosHelper from './api/axios.js';


// const pois = [
//   {
//     name: "Mission Beach Rentals",
//     _id: 2324242424,
//     category: "Shopping",
//     lat:32.769939161,
//     long:-117.252282466,
//     description: "Replace this description",
//     img_url: "missionbeachrental.jpg"
//   },
//   {
//     name: "Locker Rental Bathroom",
//     _id: 2424242424,
//     category: "Bathroom",
//     lat:32.77022447,
//     long:-117.25216549,
//     description: "Replace this description",
//     img_url: "lockerbathrooms.jpg"
//   },
//   {
//     name: "Belmonty's Burgers",
//     _id: 2462492472,
//     category: "Food and Drink",
//     lat:32.77063615,
//     long:-117.25195669,
//     description: "Replace this description",
//     img_url: "belmontyburgers.jpg"
//   },
//   {
//     name: "Krazy Kars",
//     _id: 2424242525,
//     category: "Attraction",
//     lat:32.770417351,
//     long:-117.251621426,
//     description: "Replace this description",
//     img_url: "krazykars.jpg"
//   }
// ];


class App extends Component {

  state = {
    pois: []
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


  render() {

    const { isAuthenticated } = this.props.auth;

    return (
      <div>
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
        <BelmontMap pois={this.state.pois} />
        <POIPanel pois={this.state.pois} />
      </div>
    );
  }
}

export default App;
