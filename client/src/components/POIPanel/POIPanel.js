import React from 'react';
import './index.css';
import foodIcon from '../../assets/icons/foodanddrink.svg';
import bathroomIcon from '../../assets/icons/bathroom.svg';
import shoppingIcon from '../../assets/icons/shopping.svg';
import attractionIcon from '../../assets/icons/attraction.svg';
import footballIcon from '../../assets/icons/football.svg';
import waterIcon from '../../assets/icons/fountain.svg';
import parkingIcon from '../../assets/icons/parking.svg';

const POIPanel = (props) => {
  return (
    <ul className='poiPanel'>
      {
        // eslint-disable-next-line
        props.pois.map((poi) => {

          if(poi.location !== props.location){
            //Ignore locations not being used by this map.
          }
          else{
            //The location matches with the map
            let source;

            switch(poi.category){
              case 'Attraction':
              source = attractionIcon;
              break;

              case 'Bathroom':
              source = bathroomIcon;
              break;

              case 'Food and Drink':
              source = foodIcon;
              break;

              case 'Shopping':
              source = shoppingIcon;
              break;

              case 'Sports':
              source = footballIcon;
              break;

              case 'Drinking Fountain':
              source = waterIcon;
              break;

              case 'Parking':
              source = parkingIcon;
              break;

              default:
              console.error("Something went wrong. No category found.");
              break;
            }

            return (

            <li key={poi._id} className='item' id={poi._id} onClick={props.poiOnClick}><img alt={poi.name} className='poiImg' src={source}></img>{poi.name}</li>
            );
          }
      }


        )
      }
    </ul>
  );

}
export default POIPanel;
