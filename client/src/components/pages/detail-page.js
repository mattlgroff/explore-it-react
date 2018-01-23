import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
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
      console.log(results, 'results findone')
    })
    .catch(err => {
      console.error(err)
    });
  }
  componentWillMount(){
    console.log(this.props.routeParams.id)
    this.findOne(this.props.routeParams.id)
  }

  render() {
    return (
    <div>
        <Helmet>
          <title>{this.state.name}</title>
        </Helmet>
    </div>
    );
  }
}

export default DetailedView;
