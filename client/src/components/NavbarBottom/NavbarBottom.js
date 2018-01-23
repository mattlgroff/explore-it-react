import React from 'react'
import './NavbarBottom.css'

const NavbarBottom = (props) => {
  return (
    <ul className="nav nav-pills nav-fill animated fadeIn delay-02s">
      <li className="nav-item">
        <img alt='list' className="nav-link gps_btn map_btn" src='https://exploreit.herokuapp.com/gps.png' onClick={props.locate}/>
      </li>
      {
        (!props.isAuthenticated) && (
          <li className="nav-item">
            {
              (props.displayPanel) ? <img alt='list' className="nav-link list_btn map_btn active" src='https://exploreit.herokuapp.com/list.png' onClick={props.showPanel}/>:
              <img alt='list' className="nav-link list_btn map_btn" src='https://exploreit.herokuapp.com/list.png' onClick={props.showPanel}/>
            }
          </li>
        )
      }
      {
        (props.isAuthenticated) && (
          <li className="nav-item">
            {
              (props.displayPanel) ? <img alt='list' className="nav-link list_btn map_btn active" src='https://exploreit.herokuapp.com/list.png' onClick={props.showPanel}/>:
              <img alt='list' className="nav-link list_btn map_btn" src='https://exploreit.herokuapp.com/list.png' onClick={props.showPanel}/>
            }
          </li>
        )
      }
      {
        (props.isAuthenticated) && (
          <li className="nav-item">
            {
              (props.showFavorites) ? <img alt='list' className="nav-link fav_btn map_btn active" src='https://exploreit.herokuapp.com/favlist.png' onClick={props.switchPanel}/>:
              <img alt='fav' className="nav-link fav_btn map_btn" src='https://exploreit.herokuapp.com/favlist.png' onClick={props.switchPanel}/>
            }
          </li>
        )
      }
    </ul>
  );

}
export default NavbarBottom;
