import React, { Component } from 'react';
import './Home.css';
import BelmontMap from '../../components/BelmontMap';
import POIPanel from '../../components/POIList';
import Profile from '../../components/Profile';
import FavoriteStar from '../../components/FavoriteStar';
import axiosHelper from '../../api/axios.js';
import brandlogo from '../../assets/icons/placeholder.svg'

class Home extends Component {

  state = {
    showFavorites: false,
    pois: [],
    favoritePois: [],
    favoritePoisList:[]
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadPoi();

    const { userProfile, getProfile } = this.props.auth;

    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        this.getFavPoiIDs(profile);
        console.log("Logged in as: ", this.state.profile)
      });
    } else {
      this.setState({ profile: userProfile });
    }
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
    axiosHelper.getAllPoi()
    .then(results => {
      this.setState({
        pois: results.data
      })
    })
    .catch(err => console.error(err));
  }

  getFavPoiIDs = (profile) => {
    axiosHelper.showAllFavorites(profile)
    .then(results => {
      results.data.map(profileData => {
        this.state.favoritePoisList.push(profileData.list)
      })
    })
    .then(() => this.loadFavPoi(this.state.favoritePoisList))
  }

  loadFavPoi = (IDsArray) => {
    axiosHelper.getAllFavoritesPoi(IDsArray)
    .then(results => {
      results.data.map(poi => {
        this.state.favoritePois.push(poi)
      })
    })
  }

  showPanel = () => {
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
        <nav className='navbar navbar-expand transparent'>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='mr-auto'>
            <img className='brandLogo' src={brandlogo} alt="brandlogo" />
            <a className='brandName' href="#">Explore it</a>
          </div>
          <ul className='navbar-nav'>
          {
            isAuthenticated() && (
              <li className='nav-item'>
                <FavoriteStar showPanel={this.showPanel}/>
              </li>
            )
          }
          {
            isAuthenticated() && (
              <li className='nav-item'>
                <Profile auth={this.props.auth}/>
              </li>
            )
          }

          {
            !isAuthenticated() && (
              <li className='nav-item'>
                <button
                  id="qsLoginBtn"
                  className="btn-primary login"
                  onClick={this.login.bind(this)}
                  >
                  Log In
                </button>
              </li>
            )
          }
          {
            isAuthenticated() && (
              <li className='nav-item'>
                <button
                  id="qsLogoutBtn"
                  className="btn-primary login"
                  onClick={this.logout.bind(this)}>
                  Log Out
                </button>
              </li>
            )
          }
        </ul>
        </nav>
        <BelmontMap pois={this.displayPois()} auth={this.props.auth} profile={this.state.profile}/>
        <POIPanel pois={this.displayPois()} />
      </div>
    );
  }
}

export default Home;
