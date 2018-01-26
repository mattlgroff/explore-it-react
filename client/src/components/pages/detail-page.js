import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {Image} from 'react-bootstrap';
import { browserHistory } from 'react-router';
import {Marker, Map, TileLayer} from 'react-leaflet';
import './detail.css';
import axiosHelper from '../../api/axios.js';


class DetailedView extends Component {
  constructor(){
    super();
    this.state ={
      name: '',
      description: '',
      lat: '',
      long: '',
      img_url: '',
      cateogory: '',
      id: '',
      location: ''
    }
  }
  findOne = (id) =>{
    axiosHelper.findOne(id)
    .then(results => {
      //console.log(results);
      this.setState({
        name: results.data.name,
        description: results.data.description,
        img_url: results.data.img_url,
        lat: results.data.lat,
        long: results.data.long,
        location: results.data.location,
        id: results.data.id,
        category: results.data.category
      });
    })
    .catch(err => {
      browserHistory.goBack();
      console.error(err);
    });
  }
  componentDidMount(){
    this.findOne(this.props.routeParams.id)
  }

  render() {
    return (
  <div>
    <div className="container text-center" id="small">
        <Helmet>
          <title>{this.state.name}</title>
        </Helmet>

        <h1>{this.state.name}</h1>
        <p>{this.state.category} at {this.state.location}</p>

        <hr></hr>
        <a target="_blank" href={`https://www.google.com/maps/?daddr=${this.state.lat},${this.state.long}`}>
          Directions to {this.state.name}
        </a>
        <hr></hr>

        <Image
          className='img img-responsive animated fadeIn delay-02s'
          src={`https://exploreit.herokuapp.com/${this.state.img_url}`}
          width='50%'>
        </Image>

        <hr></hr>

        <div>
          <p>{this.state.description}</p>
        </div>

        <hr></hr>

        <Map className='animated fadeIn delay-01s smallMap' zoomControl={false} center={[this.state.lat,this.state.long]} zoom={18}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
            url='https://api.mapbox.com/styles/v1/mattlgroff/cjcjws0xj18ea2sptc8iafsu5/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0dGxncm9mZiIsImEiOiJjamMzczFpNTExNWNmMnhwZjFvNGlpdnR4In0.y1gUOwBdSx6lhv_7TcmKJA'
          />

          <Marker className='animated fadeInUp' position={[this.state.lat,this.state.long]} />
        </Map>

        
    </div>
    <footer className="footer">
          <div className="container-fluid">
            © 2018 Copyright Explore It
        </div>
      </footer>
  </div>
    );
  }
}

export default DetailedView;
