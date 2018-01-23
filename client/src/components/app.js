import React, { Component } from 'react';
import Header from './Header/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header logo="Explore It" />

        <div>
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;
