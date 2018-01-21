import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Explore Your World</title>
        </Helmet>
      	<h1 className="jumbotron text-center"> Welcome to Explore It </h1>
      </div>
    );
  }
}

export default HomePage;
