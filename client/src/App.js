import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import BelmontMap from './components/BelmontMap';
import POIPanel from './components/POIList';

const pois = [
  {
    name: "Mission Beach Rentals @ Belmont ",
    _id: 2324242424,
    category: "Shopping",
    lat:32.769939161,
    long:-117.252282466,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Locker Rental Bathroom",
    _id: 2424242424,
    category: "Bathroom",
    lat:32.77022447,
    long:-117.25216549,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Belmonty's Burgers",
    _id: 2462492472,
    category: "Food and Drink",
    lat:32.77063615,
    long:-117.25195669,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Krazy Kars",
    _id: 2424242525,
    category: "Attraction",
    lat:32.770417351,
    long:-117.251621426,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  }
];


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
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
        <BelmontMap pois={pois} />
        <POIPanel pois={pois} />
      </div>
    );
  }
}

export default App;
