const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the POI collection and inserts the POIs below

mongoose.connect(
  // process.env.MONGODB_URI || "mongodb://localhost/poi",
  "mongodb://localhost/poi",
  {
    useMongoClient: true
  }
);

// db.pois.find().pretty().sort({category: 1, name: 1})

const poiSeed = [
{
  name: "Tiki Town Adventure Golf",
  category: "Attraction",
  lat:32.769942879,
  long:-117.251331785,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Quicksilver",
  category: "Shopping",
  lat:32.769971946,
  long:-117.2515172,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Sun Diego",
  category: "Shopping",
  lat:32.769935268,
  long:-117.251785044,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Wings",
  category: "Shopping",
  lat:32.769962508,
  long:-117.251947125,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Mission Beach Rentals @ Belmont ",
  category: "Shopping",
  lat:32.769939161,
  long:-117.252282466,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Beach Bathroom",
  category: "Bathroom",
  lat:32.769736809,
  long:-117.252572012,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Cannonball",
  category: "Food and Drink",
  lat:32.769926074,
  long:-117.252681086,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "South Draft Mission",
  category: "Food and Drink",
  lat:32.76992006,
  long:-117.252500514,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Locker Rental Bathroom",
  category: "Bathroom",
  lat:32.77022447,
  long:-117.25216549,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Lazermaze",
  category: "Attraction",
  lat:32.77032316,
  long:-117.25222314,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Adrenaline Zone",
  category: "Attraction",
  lat:32.77048375,
  long:-117.25219317,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Belmonty's Burgers",
  category: "Food and Drink",
  lat:32.77063615,
  long:-117.25195669,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Feats of Skill",
  category: "Attraction",
  lat:32.77064603,
  long:-117.25188908,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Games of Midway",
  category: "Attraction",
  lat:32.77053856,
  long:-117.251891,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Overdrive",
  category: "Attraction",
  lat:32.77042562,
  long:-117.25194477,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Beach Blaster",
  category: "Attraction",
  lat:32.77039791,
  long:-117.25175019,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Speedway",
  category: "Attraction",
  lat:32.77036841,
  long:-117.25175176,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Krazy Kars",
  category: "Attraction",
  lat:32.770417351,
  long:-117.251621426,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Dole Whip Jeep",
  category: "Food and Drink",
  lat:32.77031928,
  long:-117.25151878,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Octotron",
  category: "Attraction",
  lat:32.77032931,
  long:-117.25144311,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Xanadu Theatre Adventure",
  category: "Attraction",
  lat:32.77028024,
  long:-117.25139801,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Escapology",
  category: "Attraction",
  lat:32.77068437,
  long:-117.25132192,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Lifeguard Shack",
  category: "Shopping",
  lat:32.7703439,
  long:-117.25194945,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Hot Dog on a Stick",
  category: "Food and Drink",
  lat:32.77029389,
  long:-117.25194543,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Beach & Resort Wear",
  category: "Shopping",
  lat:32.77014249,
  long:-117.25194105,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Face Painting and Henna",
  category: "Attraction",
  lat:32.77020198,
  long:-117.25186851,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "San Diego's Best",
  category: "Shopping",
  lat:32.770735175,
  long:-117.251935333,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Sweet Shoppe",
  category: "Food and Drink",
  lat:32.77084126,
  long:-117.25195111,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "The Crazy Submarine",
  category: "Attraction",
  lat:32.77078112,
  long:-117.25191334,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Tilt-A-Whirl",
  category: "Attraction",
  lat:32.77085687,
  long:-117.25191089,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Toonstone",
  category: "Attraction",
  lat:32.77092556,
  long:-117.251910382,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "More Midway Games",
  category: "Attraction",
  lat:32.770974654,
  long:-117.251971585,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Ticket Booth",
  category: "Attraction",
  lat:32.77100239,
  long:-117.25186027,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Liberty Carousel",
  category: "Attraction",
  lat:32.77114019,
  long:-117.25195071,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "LazerBlast Arcade",
  category: "Attraction",
  lat:32.77113408,
  long:-117.25200277,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "San Diego Trading Company",
  category: "Shopping",
  lat:32.77117274,
  long:-117.25229054,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Giant Dipper",
  category: "Attraction",
  lat:32.771186527,
  long:-117.251877196,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Control Freak",
  category: "Attraction",
  lat:32.77109877,
  long:-117.25171503,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "Vertical Plunge",
  category: "Attraction",
  lat:32.771059264,
  long:-117.251727914,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
},
{
  name: "All Aboard",
  category: "Attraction",
  lat:32.77036895,
  long:-117.25184832,
  description: "Replace this description",
  img_url: "https://i.imgur.com/8KLbDxe.jpg"
}
]

db.POI
  .remove({})
  .then(() => db.POI.collection.insertMany(poiSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
