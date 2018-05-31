import React, { Component } from 'react';
import Car from './components/Car';
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
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
