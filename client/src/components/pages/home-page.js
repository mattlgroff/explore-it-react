import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class HomePage extends Component {
  render() {
    return (
    <div>
        <Helmet>
          <title>Explore Your World</title>
        </Helmet>
		<div className="card">
			<img className="card-img-top" src="https://exploreit.herokuapp.com/adrenzone.jpg" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Cras justo odio</li>
				<li className="list-group-item">Dapibus ac facilisis in</li>
				<li className="list-group-item">Vestibulum at eros</li>
			</ul>
			<div className="card-body">
				<a href="#" className="card-link">Card link</a>
				<a href="#" className="card-link">Another link</a>
			</div>
		</div>
	</div>

    );
  }
}

export default HomePage;
