import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import BelmontMap from './components/BelmontMap';
import POIPanel from './components/POIList';

const pois = [
  {
    name: "Tiki Town Adventure Golf",
    category: "Attraction",
    lat:32.769942879,
    long:-117.251331785,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Quicksilver",
    category: "Shopping",
    lat:32.769971946,
    long:-117.2515172,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Sun Diego",
    category: "Shopping",
    lat:32.769935268,
    long:-117.251785044,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Wings",
    category: "Shopping",
    lat:32.769962508,
    long:-117.251947125,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Mission Beach Rentals @ Belmont ",
    category: "Shopping",
    lat:32.769939161,
    long:-117.252282466,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Beach Bathroom",
    category: "Bathroom",
    lat:32.769736809,
    long:-117.252572012,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Cannonball",
    category: "Food and Drink",
    lat:32.769926074,
    long:-117.252681086,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "South Draft Mission",
    category: "Food and Drink",
    lat:32.76992006,
    long:-117.252500514,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Locker Rental Bathroom",
    category: "Bathroom",
    lat:32.77022447,
    long:-117.25216549,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Lazermaze",
    category: "Attraction",
    lat:32.77032316,
    long:-117.25222314,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Adrenaline Zone",
    category: "Attraction",
    lat:32.77048375,
    long:-117.25219317,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Belmonty's Burgers",
    category: "Food and Drink",
    lat:32.77063615,
    long:-117.25195669,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Feats of Skill",
    category: "Attraction",
    lat:32.77064603,
    long:-117.25188908,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Games of Midway",
    category: "Attraction",
    lat:32.77053856,
    long:-117.251891,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Overdrive",
    category: "Attraction",
    lat:32.77042562,
    long:-117.25194477,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Beach Blaster",
    category: "Attraction",
    lat:32.77039791,
    long:-117.25175019,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Speedway",
    category: "Attraction",
    lat:32.77036841,
    long:-117.25175176,
    description: "Replace this description",
    img_url: "https://i.imgur.com/8KLbDxe.jpg"
  },
  {
    name: "Krazy Kars",
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
        <BelmontMap />
        <POIPanel pois={pois} />
      </div>
    );
  }
}

export default App;
