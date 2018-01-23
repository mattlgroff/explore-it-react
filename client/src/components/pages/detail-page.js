import React, { Component } from 'react';
import { Helmet } from 'react-helmet';


class DetailedView extends Component {
  render() {
    return (
    <div className="container">
        <Helmet>
          <title>{this.props.routeParams.id}</title>
        </Helmet>
    </div>
    );
  }
}

export default DetailedView;
