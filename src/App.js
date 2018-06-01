import React, { Component } from 'react';
import Cars from './components/Cars';
import carData from './db.json';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.setState({
      carData
    });
  }

  render() {
    return (
      <div className="App">
        {/* Search bar */}

        {/* Filters */}

        {/* Data display */}
        <Cars data={ this.state.carData } />
      </div>
    );
  }
}

export default App;
