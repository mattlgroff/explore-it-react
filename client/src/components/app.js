import React, { Component } from 'react';
import Header from './Header/header';
const divStyle = {
  height: '100px'
}

class App extends Component {
  render() {
    return (
      <div style={this.divStyle}>
        <Header logo="Explore It" />

        <div>
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;
