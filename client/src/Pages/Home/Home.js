import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './Home.css';
import BelmontMap from '../../components/BelmontMap';
import POIPanel from '../../components/POIList';
import axiosHelper from '../../api/axios.js';

class Home extends Component {

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
        
        <BelmontMap pois={this.state.pois} />
        <POIPanel pois={this.state.pois} />
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
