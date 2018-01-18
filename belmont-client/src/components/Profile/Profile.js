import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div>
        <span className='userName nav-item'>{profile.name}</span><img className='userPhoto rounded-circle nav-item' src={profile.picture} alt="profile" />
      </div>
    );
  }
}

export default Profile;
