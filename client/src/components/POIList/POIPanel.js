import React from 'react';
import {ListGroup, ListGroupItem, Image} from 'react-bootstrap';
import './index.css';
import foodIcon from '../../assets/icons/foodanddrink.svg';
import bathroomIcon from '../../assets/icons/bathroom.svg';
import shoppingIcon from '../../assets/icons/shopping.svg';
import attractionIcon from '../../assets/icons/attraction.svg';

const POIPanel = (props) => {
  return (
    <ListGroup className='poiPanel'>
      {
        props.pois.map((poi) => {

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

            default:
            break;
          }

          return (

          <ListGroupItem><Image className='poiImg' src={source} />{poi.name}</ListGroupItem>
          );
        }

        
        )
      }
    </ListGroup>
  );

}
export default POIPanel;
