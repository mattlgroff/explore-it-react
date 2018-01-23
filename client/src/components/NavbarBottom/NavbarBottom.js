import React from 'react'
import './NavbarBottom.css'

const NavbarBottom = (props) => {
  return (
    <ul className="nav nav-pills nav-fill animated fadeIn delay-02s">
      <li className="nav-item">
        <img alt='list' className="nav-link gps_btn map_btn" src='https://i.imgur.com/5Qb7HUS.png' onClick={props.locate}/>
      </li>
      {
        (!props.isAuthenticated) && (
          <li className="nav-item">
            {
              (props.displayPanel) ? <img alt='list' className="nav-link list_btn map_btn active" src='https://i.imgur.com/Pmztb2W.png' onClick={props.showPanel}/>:
              <img alt='list' className="nav-link list_btn map_btn" src='https://i.imgur.com/Pmztb2W.png' onClick={props.showPanel}/>
            }
          </li>
        )
      }
      {
        (props.isAuthenticated) && (
          <li className="nav-item">
            {
              (props.displayPanel) ? <img alt='list' className="nav-link list_btn map_btn active" src='https://i.imgur.com/Pmztb2W.png' onClick={props.showPanel}/>:
              <img alt='list' className="nav-link list_btn map_btn" src='https://i.imgur.com/Pmztb2W.png' onClick={props.showPanel}/>
            }
          </li>
        )
      }
      {
        (props.isAuthenticated) && (
          <li className="nav-item">
            {
              (props.showFavorites) ? <img alt='list' className="nav-link fav_btn map_btn active" src='https://i.imgur.com/NxIjVhE.png' onClick={props.switchPanel}/>:
              <img alt='list' className="nav-link fav_btn map_btn" src='https://i.imgur.com/NxIjVhE.png' onClick={props.switchPanel}/>
            }
          </li>
        )
      }
    </ul>
  );

}
export default NavbarBottom;
