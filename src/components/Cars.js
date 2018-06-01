import React, { Component } from 'react';
import Car from './Car';

class Cars extends Component {
  
  render() {
    
    const carData = this.props.data.vehicles;

    return (
      <div>
        {
          carData.map(ele => {
            return <Car
              id={ ele.id }
              key={ ele.id }
              images={ ele.displayImage }
              make={ ele.vehicleCapDetails.presentationMake }
              model={ ele.vehicleCapDetails.presentationRange }
              description = { ele.autotraderDescription }
            />
          })
        }
      </div>
    );
  }
}

export default Cars;
