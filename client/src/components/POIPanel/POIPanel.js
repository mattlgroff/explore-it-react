import React, { Component }  from 'react';
import { Link } from 'react-router';
import './index.css';
import '../pages/animate.css'

class POIPanel extends Component {
  constructor(props){
    super()
  }

  renderPois = (poi, index) => {
    if(poi.location === this.props.location){
      let img_src = `${process.env.REACT_APP_SERVER}${poi.img_url}`;
      return (
        <Link className="poiLink" key={poi._id} to={`/detailed/${poi._id}`}>
          <li key={poi._id} className={`item animated fadeInUp delay-0${index}s`} id={poi._id} onClick={this.props.poiOnClick}><img alt={poi.name} className='img-responsive rounded-circle poiImg' src={img_src}></img>{poi.name}</li>
        </Link>
      );
    }
  };
  render() {
    return (
      <ul className='poiPanel'>
        {
          (this.props.showFavorites && this.props.pois.length === 0) && (
            <li className='item'>Sorry you have an empty favorite list!</li>
          )
        }
        {
          this.props.pois.map(this.renderPois)
        }
      </ul>
    )
  }
}
export default POIPanel;
