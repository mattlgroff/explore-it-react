let domain = `http://localhost:8080/${process.env.REACT_APP_DOMAIN}`;

if(process.env.REACT_APP_SERVER){
  console.log("Hosted domain!");
  domain = `${process.env.REACT_APP_SERVER}${process.env.REACT_APP_DOMAIN}`;
}

const axios = require('axios');
console.log('this is domain',domain)

const helpers = {
  getAllPoi: function(){
    return axios.get(domain + '/poi/all');
  },
  getAllFavoritePois: function(favoritePoisArray){
    console.log('getallfavoPOIOBJ Sent TO', domain + '/poi/findFavorites', favoritePoisArray)
    return axios.post(domain + '/poi/findFavorites', {listArr: favoritePoisArray});
  },
  getOnePoi: function(id){
    return axios.get(domain + '/poi/' + id);
  },
  addToFavorites: function(profile, list){
    return axios.post(domain + '/favorites', {
      profile: profile,
      list: list
    });
  },
  getUserFavoriteList: function(profile){
    console.log("I am looking here:", profile);
    return axios.get(domain + '/favorites/' + profile);
  },
  removeFavorite: function(profile, list){
    return axios.post(domain + '/remove-favorite', {
      profile: profile,
      list: list
    });
  },
  isFavorite: function(profile, list){
    return axios.get(domain + '/is-favorite', {
      profile: profile,
      list: list
    });
  }
}

module.exports = helpers;
