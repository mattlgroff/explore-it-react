import React from 'react';
import {ListGroup, ListGroupItem, Image} from 'react-bootstrap'
import './index.css'

const POIPanel = (props) => {
  return (
    <ListGroup className='poiPanel'>
      {
        props.pois.map((poi) =>
          <ListGroupItem><Image className='poiImg' src={poi.img_url} circle />{poi.name}</ListGroupItem>
        )
      }
    </ListGroup>
  );

}
export default POIPanel;
