const axios = require('axios');
const BASE_URL = 'http://localhost:3000';
// const BASE_URL = 'https://exploreit.herokuapp.com';

const helpers = {
  getAllPoi: function(){
    return axios.get(BASE_URL + '/poi/all');
  },
  getAllFavoritePois: function(favoritePoisArray){
    console.log('getallfavoPOIOBJ Sent TO', BASE_URL + '/poi/findFavorites', favoritePoisArray)
    return axios.post(BASE_URL + '/poi/findFavorites', {listArr: favoritePoisArray});
  },
  addToFavorites: function(userID, poiID){
    return axios.put(BASE_URL + '/add-favorite', {
      userID: userID,
      poiID: poiID
    });
  },
  getUserFavoriteList: function(profile){
    console.log("I am looking here:", profile);
    return axios.get(BASE_URL + '/favorites/' + profile);
  },
  removeFavorite: function(userID, poiID){
    return axios.put(BASE_URL + '/remove-favorite', {
      userID: userID,
      poiID: poiID
    });
  },
}

module.exports = helpers;
