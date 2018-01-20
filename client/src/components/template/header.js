import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HeaderTemplate extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key={`${1}header`} className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>,
        <li key={`${2}header`} className="nav-item">
          <Link className="nav-link" to="belmont">Belmont Park</Link>
        </li>,
        <li key={`${3}header`} className="nav-item">
          <Link className="nav-link" to="Grossmont">Grossmont College</Link>
        </li>,
        <li key={`${4}header`} className="nav-item">
          <Link className="nav-link" to="logout">Logout</Link>
        </li>,
      ];
    } else {
      return [
        // Unauthenticated navigation

        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/">Home</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="belmont">Belmont Park</Link>
        </li>,
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="Grossmont">Grossmont College</Link>
        </li>,
        <li className="nav-item" key={4}>
          <Link className="nav-link" to="login">Login</Link>
        </li>,
        <li className="nav-item" key={5}>
          <Link className="nav-link" to="register">Register</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger navbar-fixed-top">
          <div className="container">  
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">{this.props.logo}</Link>
            </div>

            <div className="collapse navbar-collapse justify-content-end" id="nav-collapse">
              <ul className="nav navbar-nav">
                {this.renderLinks()} 
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(HeaderTemplate);