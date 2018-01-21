const axios = require('axios');
// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://exploreit.herokuapp.com';

const helpers = {
  getAllPoi: function(){
    return axios.get(BASE_URL + '/poi/all');
  },
  getAllFavoritePois: function(favoritePoisArray){
    console.log('getallfavoPOIOBJ Sent TO', BASE_URL + '/poi/findFavorites', favoritePoisArray)
    return axios.post(BASE_URL + '/poi/findFavorites', {listArr: favoritePoisArray});
  },
  getOnePoi: function(id){
    return axios.get(BASE_URL + '/poi/' + id);
  },
  addToFavorites: function(profile, list){
    return axios.post(BASE_URL + '/favorites', {
      profile: profile,
      list: list
    });
  },
  getUserFavoriteList: function(profile){
    console.log("I am looking here:", profile);
    return axios.get(BASE_URL + '/favorites/' + profile);
  },
  removeFavorite: function(profile, list){
    return axios.post(BASE_URL + '/remove-favorite', {
      profile: profile,
      list: list
    });
  },
  isFavorite: function(profile, list){
    return axios.get(BASE_URL + '/is-favorite', {
      profile: profile,
      list: list
    });
  }
}

module.exports = helpers;
