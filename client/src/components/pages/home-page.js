import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import "./home.css";


class HomePage extends Component {
  render() {
    return (
<div className="container">
	<Helmet>
		<title>{this.props.route.name}</title>
	</Helmet>
	<div className="jumbotron">
		<h1 className="display-4">Explore It</h1>
		<p className="lead">Maps As A Service</p>
		<hr className="my-4" />
		<p>Explore It is maps as a service. It's modular design allows any public area to have it's own map overlay.</p>
	</div>
	<div className="row">
		<div className="card mapCardStyle">
			<a href="https://exploreit.herokuapp.com/belmont">
			<img className="card-img-top mapImg" src="https://exploreit.herokuapp.com/belmont_park.png" alt="Belmont Park" />
			</a>
			<div className="card-body">
			<h5 className="card-title">Belmont Park</h5>
			<p className="card-text">Belmont Park is a historic oceanfront amusement park located in the Mission Bay area of San Diego, California.</p>
			</div>
		</div>

		<div className="card mapCardStyle">
			<a href="https://exploreit.herokuapp.com/grossmont">
			<img className="card-img-top mapImg" src="https://exploreit.herokuapp.com/grossmont_college.png" alt="Grossmont College" />
			</a>
			<div className="card-body">
			<h5 className="card-title">Grossmont College</h5>
			<p className="card-text">Grossmont College is a community college located in El Cajon, California, in the county of San Diego.</p>
			</div>
		</div>

	</div>
</div>
	


    );
  }
}

export default HomePage;
