const domain = 'http://localhost:8080';
const axios = require('axios');

const helpers = {
  getAllPoi: function(){
    return axios.get(domain + '/poi/all');
  },
  getAllFavoritesPoi: function(favoritePoisArray){
    return axios.post(domain + '/poi/findFavorites', favoritePoisArray);
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
  showAllFavorites: function(profile){
    console.log("I am looking here:" + profile);
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
