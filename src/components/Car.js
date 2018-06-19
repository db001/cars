import React, { Component } from 'react';

class Car extends Component {  
  
  render() {
    
    const car = this.props;
    const imgs = this.props.images;

    let thumbnail
    
    if(imgs) {
      thumbnail = <img src={`http:${imgs.small}`} alt={`${car.make} ${car.model}`} />;
    } else {
      thumbnail = '';
    }
    
    return (
      
      <div className='carDetails'>
        <div className='detailHeading'>
          { thumbnail }
          <div className="carTitles">
            <h2>{ car.make } { car.model }</h2>
            <h5>{ car.derivative }</h5>
          </div>
        </div>
        <p>{ car.description }</p>
      </div>
    );
  }
}

export default Car;
