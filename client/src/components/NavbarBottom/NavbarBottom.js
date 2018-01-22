import React from 'react'
import './NavbarBottom.css'

const NavbarBottom = (props) => {
  return (
    <ul className="nav nav-pills nav-fill animated fadeIn delay-02s">
      {
        (!props.isAuthenticated) && (
          <li className="nav-item">
            <a className={(props.displayPanel) ? "nav-link btn-dark active":"nav-link btn-dark"} href='' onClick={props.showPanel}>Show List</a>
          </li>
        )
      }
      {
        (props.isAuthenticated) && (
          <li className="nav-item">
            <a className={(props.displayPanel) ? "nav-link btn-dark active":"nav-link btn-dark"} href='' onClick={props.showPanel}>Show List</a>
          </li>
        )
      }
      {
        (props.isAuthenticated) && (
          <li className="nav-item">
            <a className={(props.showFavorites) ? "nav-link btn-dark active": "nav-link btn-dark"} href='' onClick={props.switchPanel}>Saved List</a>
          </li>
        )
      }
    </ul>
  );

}
export default NavbarBottom;
