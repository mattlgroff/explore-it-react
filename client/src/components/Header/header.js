import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import cookie from 'react-cookies';
import './header.css';
import mainLogo from'./../../assets/icons/binoculars.ico';


let divStyle = {
    backgroundColor: "#2f2f2f",
    borderBottom: "2px solid blue"

  };
  let logoSize = {
    width: "40px"
  }


class HeaderTemplate extends Component {


  renderLinks() {
    if (this.props.authenticated) {

      const user = cookie.load('user');

      return [
        <li key={`${1}header`} className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>,
        <li key={`${2}header`} className="nav-item">
          <Link className="nav-link" to="/belmont">Belmont Park</Link>
        </li>,
        <li key={`${3}header`} className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>,
        <li key={`${4}header`} className="nav-item">
          <Link className="nav-link" to="/grossmont">Grossmont College</Link>
        </li>,
        <li key={`${5}header`} className="nav-item">
          <Link className="nav-link" to="/logout">Logout {user.email}</Link>
          <div className='rounded-circle userAvatar'></div>
        </li>
      ];

    }else {

      return [
        // Unauthenticated navigation

        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/">Home</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/belmont">Belmont Park</Link>
        </li>,
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="/about">About</Link>
        </li>,
        <li className="nav-item" key={4}>
          <Link className="nav-link" to="/grossmont">Grossmont College</Link>
        </li>,
        <li className="nav-item" key={5}>
          <Link className="nav-link" to="/login">Login</Link>
        </li>,
        <li className="nav-item" key={6}>
          <Link className="nav-link" to="/register">Register</Link>
        </li>
      ];
    }
  }


  render() {
    return (
      <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top animated fadeIn delay-02s" style={divStyle} >
          <div className="container-fluid">

            <div className="navbar-header">
              
              <Link className="navbar-brand brandName" to="/"><img  src={mainLogo} style={logoSize} alt="Explore It"/> {this.props.logo}</Link>
            </div>

            <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#nav-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="this-button">
              <span className="navbar-toggler-icon"/>
            </button>

            <div className="navbar-collapse justify-content-end collapse" id="nav-collapse">
              <ul className="navbar-nav">
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
