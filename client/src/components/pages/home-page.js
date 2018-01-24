import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import "./home.css";


class HomePage extends Component {
	render() {
		return (
			<div>
				<div className="container text-center mainSec">
					<Helmet>
						<title>Explore Your World</title>
					</Helmet>
					<div className="jumbotron">
						<h1 className="display-4">Explore It</h1>
						<p className="lead">Maps As A Service</p>
						<hr className="my-4" />
						<p>Explore It is maps as a service. It's modular design allows any public area to have it's own map overlay.</p>
					</div>
				</div>
				<div className="container-fluid moduleSec">
					<div className='row'>
					<div className="mapCardStyle col-md-6 text-center">
						<a href="https://exploreit.herokuapp.com/belmont">
							<img className="img-top mapImg img-responsive img-thumbnail" src="https://i.imgur.com/XTzMYws.jpg" alt="Belmont Park" />
						</a>
						<div className="body">
							<h5 className="title">Belmont Park</h5>
							<p className="text">Belmont Park is a historic oceanfront amusement park located in the Mission Bay area of San Diego, California.</p>
						</div>
					</div>

					<div className="mapCardStyle col-md-6 text-center">
						<a href="https://exploreit.herokuapp.com/grossmont">
							<img className="img-top mapImg img-responsive img-thumbnail" src="https://i.imgur.com/jUejXZ1.jpg" alt="Grossmont College" />
						</a>
						<div className="body">
							<h5 className="title">Grossmont College</h5>
							<p className="text">Grossmont College is a community college located in El Cajon, California, in the county of San Diego.</p>
						</div>
					</div>
					</div>
				</div>
			</div>


		);
	}
}

export default HomePage;
