import React from 'react';
import './index.css';

const POIPanel = (props) => {
  return (
    <ul className='poiPanel'>
      {
        (props.showFavorites && props.pois.length === 0) && (
          <li className='item'>Sorry you have an empty favorite list!</li>
        )
      }
      {
        props.pois.map((poi) => {

          if(poi.location === props.location){
            let img_src = `${process.env.REACT_APP_SERVER}${poi.img_url}`;
            return (
              <li key={poi._id} className='item' id={poi._id} onClick={props.poiOnClick}><img alt={poi.name} className='img-responsive rounded-circle poiImg' src={img_src}></img>{poi.name}</li>
            );
          }
        }
      )
    }
  </ul>
);

}
export default POIPanel;
