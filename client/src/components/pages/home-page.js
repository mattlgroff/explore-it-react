import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import "./home.css";


class HomePage extends Component {
  render() {
    return (
<div>
	<Helmet>
		<title>Explore Your World</title>
	</Helmet>
	<div className="jumbotron">
		<h1 className="display-4">Explore It</h1>
		<p className="lead">Maps As A Service</p>
		<hr className="my-4" />
		<p>Explore It is maps as a service. It's modular design allows any public area to have it's own map overlay.</p>
	</div>
	<div className = "container">
	<div className = "row">
		<div className="card mapCardStyle">
			<img className="card-img-top" src="https://exploreit.herokuapp.com/belmont_park.png" alt="Belmont Park" />

			<div className="card-body">
			<h5 className="card-title">Belmont Park</h5>
			<p className="card-text">Belmont Park is a historic oceanfront amusement park located in the Mission Bay area of San Diego, California.</p>
			</div>
			<ul className="list-group list-group-flush">
			<li className="list-group-item">Cras justo odio</li>
			<li className="list-group-item">Dapibus ac facilisis in</li>
			<li className="list-group-item">Vestibulum at eros</li>
			</ul>
		</div>

		<div className="card mapCardStyle">
			<img className="card-img-top" src="https://exploreit.herokuapp.com/grossmont_college.png" alt="Grossmont College" />
			<div className="card-body">
			<h5 className="card-title">Grossmont College</h5>
			<p className="card-text">Grossmont College is a community college located in El Cajon, California, in the county of San Diego.</p>
			</div>
			<ul className="list-group list-group-flush">
			<li className="list-group-item">Cras justo odio</li>
			<li className="list-group-item">Dapibus ac facilisis in</li>
			<li className="list-group-item">Vestibulum at eros</li>
			</ul>
		</div>

	</div>

	

	</div>
</div>
	


    );
  }
}

export default HomePage;
