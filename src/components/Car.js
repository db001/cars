import React, { Component } from 'react';

class Car extends Component {  
  
  render() {
    
    const car = this.props;
    const imgs = car.images;
    
    return (
      
      <div>
        {/* <img src={`http:${small}`} alt={`${car.make} ${car.model}`} /> */}
        <h2>{ car.make } { car.model }</h2>
        <p>{ car.description }</p>
      </div>
    );
  }
}

export default Car;
