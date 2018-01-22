import React from 'react'
import './NavbarBottom.css'

const NavbarBottom = (props) => {
  return (
    <ul className="nav nav-pills nav-fill">
      {
        (props.isAuthenticated) && (
          <li className="nav-item">
            <a className="nav-link" onClick={props.showPanel}>Show List</a>
          </li>
        )
      }
      <li className="nav-item">
        <a className="nav-link">Link</a>
      </li>
      {
        (props.isAuthenticated) && (
          <li className="nav-item">
            <a className="nav-link" onClick={props.switchPanel}>Saved List</a>
          </li>
        )
      }
    </ul>
  );

}
export default NavbarBottom;
