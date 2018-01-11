const domain = 'http://localhost:8080';
const axios = require('axios');

const helpers = {
  getAllPoi: function(){
    return axios.get(domain + '/poi/all');
  },
  getOnePoi: function(id){
    return axios.get(domain + '/poi/' + id);
  },
  addToFavorites: function(profile, list){
    console.log("Profile: " + profile);
    console.log("List: " + list);

    return axios.post(domain + '/favorites', {
      profile: profile,
      list: list
    });
  },
  showAllFavorites: function(profile){
    console.log("Profile: " + profile);

    return axios.get(domain + '/favorites', {
      profile: profile
    });
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