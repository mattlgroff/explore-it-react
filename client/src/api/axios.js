const domain = 'http://localhost:8080';
const axios = require('axios');

const helpers = {
  getAllPoi: function(){
    return axios.get(domain + '/poi/all');
  },
  getOnePoi: function(id){
    return axios.get(domain + '/poi/' + id);
  }
}

module.exports = helpers;