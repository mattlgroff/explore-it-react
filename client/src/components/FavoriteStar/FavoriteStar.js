import React from 'react'
import {Image} from 'react-bootstrap'
import starIcon from '../../assets/icons/star.svg'
import './FavoriteStar.css'


const Star = props => (
      <Image src={starIcon} className='favoriteStar' onClick={() => props.showPanel()}></Image>
  );

export default Star;
