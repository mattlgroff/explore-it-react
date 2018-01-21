import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class NotFoundPage extends Component {

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>{this.props.route.name}</title>
        </Helmet>
        <h1>404 - Page Not Found</h1>
        <p>I'm sorry, the page you were looking for cannot be found!</p>
      </div>
    );
  }
}

export default NotFoundPage;
