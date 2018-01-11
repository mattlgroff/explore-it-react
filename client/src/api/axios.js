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


// const helpers = {
//   getPoiInfo: function(username){
//     return axios.all([getRepos(username), getOnePoi(id)])
//       .then(function(arr){
//         return {
//           repos: arr[0].data,
//           bio: arr[1].data
//         }
//       })
//   }
// }

module.exports = helpers;