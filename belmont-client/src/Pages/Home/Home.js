/* eslint-disable */
import React, { Component } from 'react';
import './Home.css';
import ExploreMap from '../../components/ExploreMap';
import POIPanel from '../../components/POIList';
import Profile from '../../components/Profile';
import FavoriteStar from '../../components/FavoriteStar';
import axiosHelper from '../../api/axios.js';
import brandlogo from '../../assets/icons/logo.svg'

class Home extends Component {

  state = {
    showFavorites: false,
    pois: [],
    favoritePois: [],
    favoritePoisList:[]
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadPoi()

    const { userProfile, getProfile } = this.props.auth;

    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        this.getUserFavoriteList(profile);
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
    .catch(err => {
      console.error(err)
    });
  }

  getUserFavoriteList = (profile) => {
    axiosHelper.getUserFavoriteList(profile.sub)
    .then(results => {
      this.setState({favoritePoisList: results.data.list});
      console.log('this.favoritePoisList',this.state.favoritePoisList)
      this.loadFavPoi(this.state.favoritePoisList)
    })
  }

  loadFavPoi = (IDsArray) => {
    axiosHelper.getAllFavoritePois(IDsArray)
    .then(results => {
      this.setState({
        favoritePois: results.data
      });
      console.log('favoritePois', this.state.favoritePois)
    })
    .catch(err => console.error(err));
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
            <a className='brandName' href="#">{process.env.REACT_APP_MAP_NAME}</a>
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
        <ExploreMap showPanel={this.showPanel} poisList={this.state.favoritePoisList} pois={this.displayPois()} auth={this.props.auth} profile={this.state.profile} getUserFavoriteList={this.getUserFavoriteList}/>
        <POIPanel  pois={this.displayPois()} />
      </div>
    );
  }
}

export default Home;
