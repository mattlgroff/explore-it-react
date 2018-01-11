const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the POI collection and inserts the POIs below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/belmont",
  // "mongodb://localhost/poi",
  {
    useMongoClient: true
  }
);


const poiSeed = [
{
  name: "Tiki Town Adventure Golf",
  category: "Attraction",
  lat:32.769942879,
  long:-117.251331785,
  description: "Unleash your inner adventurer as you take on this 18-hole mini golf course that twists through a building with surprises at every turn – watch out for the volcano!",
  img_url: "tikitown.jpg"
},
{
  name: "Quicksilver",
  category: "Shopping",
  lat:32.769971946,
  long:-117.2515172,
  description: "Beach and sport shop.",
  img_url: "quicksilver.jpg"
},
{
  name: "Sun Diego",
  category: "Shopping",
  lat:32.769935268,
  long:-117.251785044,
  description: "Specializing in Southern California active lifestyle and youth culture, Sun Diego provides shoppers with the best selection of skate, surf, and beach apparel, accessories, and equipment.",
  img_url: "sundiego.jpg"
},
{
  name: "Wings",
  category: "Shopping",
  lat:32.769962508,
  long:-117.251947125,
  description: "Wings has everything you need to reach the beach! Stop in for quality clothing, swimwear, shoes, souvenirs, and beach accessories at affordable prices.",
  img_url: "wings.jpg"
},
{
  name: "Mission Beach Rentals",
  category: "Shopping",
  lat:32.769939161,
  long:-117.252282466,
  description: "On sand, on waves, on wheels – the best rentals on the beach! Whether you’re looking for bikes, surfboards, bodyboards, wetsuits, kayaks, Rollerblades™, skateboards, beach chairs, umbrellas, or even snorkeling equipment, Mission Beach Rentals has all you need to fit your active beach lifestyle!",
  img_url: "missionbeachrental.jpg"
},
{
  name: "Beach Bathroom",
  category: "Bathroom",
  lat:32.769736809,
  long:-117.252572012,
  description: "Mission Beach Bathrooms by the parking lot.",
  img_url: "beachbathrooms.jpg"
},
{
  name: "Cannonball",
  category: "Food and Drink",
  lat:32.769926074,
  long:-117.252681086,
  description: "Sushi with a splash! Besides the delicious California cuisine Pacific Rim influences and sushi, this oceanfront restaurant is also serving up the best view in San Diego! It’s never been more enjoyable to sip on refreshing seasonally inspired beach craft cocktails while soaking up the essence of the beach. With thoughtful details and accents, this Mission Beach rooftop transports you to a pool-like setting without all the splashing and twice the views! So dive in, there’s nothing quite like Cannonball #splashresponsibly",
  img_url: "cannonball.jpg"
},
{
  name: "South Draft Mission",
  category: "Food and Drink",
  lat:32.76992006,
  long:-117.252500514,
  description: "Calling all Espresso lovers! Bike, board, or stroll down to Draft Coffee for specialty coffee and pastries on the Boardwalk. Situated just south of Draft, this local stop is serving up only the best Italian-style blends of Lavazza Premium Coffee.",
  img_url: "southdraft.jpg"
},
{
  name: "Locker Rental Bathroom",
  category: "Bathroom",
  lat:32.77022447,
  long:-117.25216549,
  description: "Bathrooms located by Lazermaze. Lockers are here as well!",
  img_url: "lockerbathrooms.jpg"
},
{
  name: "Lazermaze",
  category: "Attraction",
  lat:32.77032316,
  long:-117.25222314,
  description: "This “Mission Impossible” style course invites players to duck, dive and roll through a timed course. Navigate the course quickly without breaking the lasers.",
  img_url: "lazermaze.jpg"
},
{
  name: "Adrenaline Zone",
  category: "Attraction",
  lat:32.77048375,
  long:-117.25219317,
  description: "Harness up, it’s time to conquer the mountain! Our Rock Wall is 30 feet tall and has different routes to the top.",
  img_url: "adrenzone.jpg"
},
{
  name: "Belmonty's Burgers",
  category: "Food and Drink",
  lat:32.77063615,
  long:-117.25195669,
  description: "In the heart of Belmont Park, among the famous monster waffle cones and iconic roller coaster, Belmonty’s  is an attraction in its own right. Take your taste buds for a ride as you sink your teeth into a yummy burger covered in ooey-gooey cheese!",
  img_url: "belmontyburgers.jpg"
},
{
  name: "Feats of Skill",
  category: "Attraction",
  lat:32.77064603,
  long:-117.25188908,
  description: "Prove yourself with feats of skill!",
  img_url: "fearsofskill.jpg"
},
{
  name: "Games of Midway",
  category: "Attraction",
  lat:32.77053856,
  long:-117.251891,
  description: "Midway games of chance and skill!",
  img_url: "gamesofthemidway.jpg"
},
{
  name: "Overdrive Bumper Cars",
  category: "Attraction",
  lat:32.77042562,
  long:-117.25194477,
  description: "Relive the fun of bumper cars or experience them for the first time while enjoying this amusement park classic.",
  img_url: "overdrive.jpg"
},
{
  name: "Beach Blaster",
  category: "Attraction",
  lat:32.77039791,
  long:-117.25175019,
  description: "One of our most popular rides for adrenaline junkies! This thrilling machine swings passengers 60 feet in the air to 120 degrees in both directions all while spinning",
  img_url: "beachblaster.jpg"
},
{
  name: "Speedway",
  category: "Attraction",
  lat:32.77036841,
  long:-117.25175176,
  description: "Harness your inner race car driver on this zippy Nascar racing adventure.",
  img_url: "speedway.jpg"
},
{
  name: "Krazy Kars",
  category: "Attraction",
  lat:32.770417351,
  long:-117.251621426,
  description: "Bumper cars gone crazy! Take the driver’s seat and steer using levers during this colorful twist on your favorite classic.",
  img_url: "krazykars.jpg"
},
{
  name: "Dole Whip Jeep",
  category: "Food and Drink",
  lat:32.77031928,
  long:-117.25151878,
  description: "San Diego’s favorite beachfront amusement center is now serving Dole Whip; a coveted treat also famously sold in Hawaii and at Disneyland. Located directly under the Sky Ropes Adventure, this refreshing taste of paradise is the perfect addition to your day in the park!",
  img_url: "dolewhipjeep.jpg"
},
{
  name: "Octotron",
  category: "Attraction",
  lat:32.77032931,
  long:-117.25144311,
  description: "On this coaster-like track, you decide how much you spin and how fast you go. Think you can handle the dizzying excitement?",
  img_url: "octotron.jpg"
},
{
  name: "Xanadu Theatre Adventure",
  category: "Attraction",
  lat:32.77028024,
  long:-117.25139801,
  description: "Strap on your seat belts and try to guess the 7 dimensions of Xanadu! Combat zombies, aliens & pirates! Our new state of the art theater with digital effects and motion seats will have you feeling like you are in a movie!",
  img_url: "xanadu.jpg"
},
{
  name: "Escapology",
  category: "Attraction",
  lat:32.77068437,
  long:-117.25132192,
  description: "The rules are simple, the games are not. You have 1 hour to find clues, unlock doors, solve puzzles, and escape the room! Do you have what it takes to escape The Code, Antidote, and Budapest Express?",
  img_url: "escapology.jpg"
},
{
  name: "Lifeguard Shack",
  category: "Shopping",
  lat:32.7703439,
  long:-117.25194945,
  description: "Beach and souvenirs shop.",
  img_url: "lifeguardshack.jpg"
},
{
  name: "Hot Dog on a Stick",
  category: "Food and Drink",
  lat:32.77029389,
  long:-117.25194543,
  description: "Hot Dog on a Stick uses the highest quality all-turkey hot dogs and the best lemons for fresh squeezed lemonade. Combine that with french fries, cheese on a stick, funnel cakes, or a nice juicy hot dog in a bun and Hot Dog on a Stick will surely “stick” a smile on your face while enjoying a day in the park!",
  img_url: "hotdogonastick.jpg"
},
{
  name: "Beach & Resort Wear",
  category: "Shopping",
  lat:32.77014249,
  long:-117.25194105,
  description: "Spend time at the beach in style! Beach and Resort Wear has all your beach necessities, clothes, and more!",
  img_url: "beachresortwear.jpg"
},
{
  name: "Face Painting and Henna",
  category: "Attraction",
  lat:32.77020198,
  long:-117.25186851,
  description: "What’s a trip to the park without leaving a mark – get inked with their Henna tattoos!",
  img_url: "facepaintingandhenna.jpg"
},
{
  name: "San Diego's Best",
  category: "Shopping",
  lat:32.770735175,
  long:-117.251935333,
  description: "Beach and souvenirs shop.",
  img_url: "sandiegobest.jpg"
},
{
  name: "Sweet Shoppe",
  category: "Food and Drink",
  lat:32.77084126,
  long:-117.25195111,
  description: "In the heart of the midway, The Sweet Shoppe is serving up everything from homemade fudge to candy apples, ice cream cones, cotton candy, frozen bananas and more. Indulge your taste buds with delicious treats that will make your day at the park even sweeter!",
  img_url: "sweetshoppe.jpg"
},
{
  name: "Crazy Submarine",
  category: "Attraction",
  lat:32.77078112,
  long:-117.25191334,
  description: "Rocking motions and deep dips will have you thinking you’re diving into the deep ocean during this crazy ride.",
  img_url: "submarine.jpg"
},
{
  name: "Tilt-A-Whirl",
  category: "Attraction",
  lat:32.77085687,
  long:-117.25191089,
  description: "Take a spin into the past with his fast and furious classic. The Tilt-a-Whirl will spin you into tomorrow in a whirling, twirling frenzy.",
  img_url: "tiltawhirl.jpg"
},
{
  name: "Toonstone",
  category: "Attraction",
  lat:32.77092556,
  long:-117.251910382,
  description: "A shooting gallery midway game.",
  img_url: "toonstone.jpg"
},
{
  name: "More Midway Games",
  category: "Attraction",
  lat:32.770974654,
  long:-117.251971585,
  description: "Do you have what it takes to win a prize? Test your skills by playing Belmont Park’s midway games featuring Park favorites such Down the Clown, Balloon Buster, High Striker, and more!",
  img_url: "moremidway.jpg"
},
{
  name: "Ticket Booth",
  category: "Attraction",
  lat:32.77100239,
  long:-117.25186027,
  description: "Purchase tickets for attractions at Belmont Park!",
  img_url: "ticketbooth.jpg"
},
{
  name: "The Liberty Carousel",
  category: "Attraction",
  lat:32.77114019,
  long:-117.25195071,
  description: "Saddle up on your favorite animal and let this family favorite take you for a ride.",
  img_url: "carousel.jpg"
},
{
  name: "LazerBlast and Arcade",
  category: "Attraction",
  lat:32.77113408,
  long:-117.25200277,
  description: "LazerBlast Tag! Plus the Arcade: Whether you’re looking to win tickets playing the latest new games or the newly installed arcade classics like Pac-Man, Donkey Kong & Frogger, the arcade has something fun for everyone.",
  img_url: "lazerblast.jpg"
},
{
  name: "San Diego Trading Company",
  category: "Shopping",
  lat:32.77117274,
  long:-117.25229054,
  description: "Whether you’re a tourist looking to take a piece of San Diego home or a local proud to represent their favorite city, San Diego Trading company has swag for your bag!",
  img_url: "sandiegotradingcompany.jpg"
},
{
  name: "Giant Dipper Roller Coaster",
  category: "Attraction",
  lat:32.771186527,
  long:-117.251877196,
  description: "Built in 1925, this exciting ride of dips and turns at high speeds is a historic staple in Mission Beach and a favorite amusement among tourists and locals alike.",
  img_url: "giantdipper.jpg"
},
{
  name: "Control Freak",
  category: "Attraction",
  lat:32.77109877,
  long:-117.25171503,
  description: "You’re in control as you power forward, backward, and upside down while rotating round and round on this popular ride.",
  img_url: "controlfreak.jpg"
},
{
  name: "Vertical Plunge",
  category: "Attraction",
  lat:32.771059264,
  long:-117.251727914,
  description: "Get lifted three long stories high before taking a quick plunge to the bottom.",
  img_url: "vertical.jpg"
},
{
  name: "Belmont Express",
  category: "Attraction",
  lat:32.77036895,
  long:-117.25184832,
  description: "All aboard the Belmont Express! This 4-car train carries passengers all around the Park and through the Midway!",
  img_url: "allaboard.jpg"
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
