import React, { Component }  from 'react'
import {GeoJSON, Map, TileLayer} from 'react-leaflet'
import "./index.css";

class SimpleExample extends Component {
  constructor() {
    super()
    this.state = {
      lat: 32.770844,
      lng: -117.2527572,
      zoom: 20,
      open: false
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    console.log('map is rendered')
    return (
      <Map center={position} zoom={this.state.zoom}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <GeoJSON data={getGeoJson()} />
      </Map>
    );
  }
}


export default SimpleExample;
function getGeoJson() {
  return {"type":"FeatureCollection","features":[
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.251331785,32.769942879]},"properties":{"Name":"Tiki Town Adventure Golf"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.2515172,32.769971946]},"properties":{"Name":"Quicksilver"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.251785044,32.769935268]},"properties":{"Name":"Sun Diego"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.251947125,32.769962508]},"properties":{"Name":"Wings"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.252282466,32.769939161]},"properties":{"Name":"Mission Beach Rentals @ Belmont"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.252572012,32.769736809]},"properties":{"Name":"Beach Bathroom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.252681086,32.769926074]},"properties":{"Name":"Cannonball"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.252500514,32.76992006]},"properties":{"Name":"South Draft Mission"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25216549,32.77022447]},"properties":{"Name":"Locker Rental Restrooms"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25222314,32.77032316]},"properties":{"Name":"Lazermaze"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25219317,32.77048375]},"properties":{"Name":"Adrenaline Zone"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25195669,32.77063615]},"properties":{"Name":"Belmonty's Burgers"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25188908,32.77064603]},"properties":{"Name":"Feats of Skill"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.251891,32.77053856]},"properties":{"Name":"Games of Midway"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25194477,32.77042562]},"properties":{"Name":"Overdrive"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25175019,32.77039791]},"properties":{"Name":"Beach Blaster"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25175176,32.77036841]},"properties":{"Name":"Speedway"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.251621426,32.770417351]},"properties":{"Name":"Krazy Kars"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25151878,32.77031928]},"properties":{"Name":"Dole Whip Jeep"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25144311,32.77032931]},"properties":{"Name":"Octotron"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25139801,32.77028024]},"properties":{"Name":"Xanadu Theatre Adventure"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25132192,32.77068437]},"properties":{"Name":"Escapology"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25194945,32.7703439]},"properties":{"Name":"Lifeguard Shack"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25194543,32.77029389]},"properties":{"Name":"Hot Dog on a Stick"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25194105,32.77014249]},"properties":{"Name":"Beach & Resort Wear"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25186851,32.77020198]},"properties":{"Name":"Face Painting and Henna"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.251935333,32.770735175]},"properties":{"Name":"San Diego's Best"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25195111,32.77084126]},"properties":{"Name":"Sweet Shoppe"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25191334,32.77078112]},"properties":{"Name":"The Crazy Submarine"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25191089,32.77085687]},"properties":{"Name":"Tilt-A-Whirl"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.251910382,32.77092556]},"properties":{"Name":"Toonstone"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.251971585,32.770974654]},"properties":{"Name":"More Midway Games"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25186027,32.77100239]},"properties":{"Name":"Ticket Booth"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25195071,32.77114019]},"properties":{"Name":"Liberty Carousel"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25200277,32.77113408]},"properties":{"Name":"LazerBlast Arcade"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25229054,32.77117274]},"properties":{"Name":"San Diego Trading Company"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.251877196,32.771186527]},"properties":{"Name":"Giant Dipper"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25171503,32.77109877]},"properties":{"Name":"Control Freak"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.251727914,32.771059264]},"properties":{"Name":"Vertical Plunge"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25184832,32.77036895]},"properties":{"Name":"All Aboard"}}
  ]
}

}
