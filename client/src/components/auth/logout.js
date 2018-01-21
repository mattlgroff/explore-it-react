import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import { Helmet } from 'react-helmet';

class Logout extends Component {
  componentWillMount() {
    this.props.logoutUser();
  }

  render() {
    return 
    	<div>
    		<Helmet>
          		<title>{this.props.route.name}</title>
        	</Helmet>
    		<div>
    			Sorry to see you go!
    		</div>
    	</div>;
  }
}

export default connect(null, actions)(Logout);
