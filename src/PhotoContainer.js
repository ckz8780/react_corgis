import React, { Component } from 'react';
import Photo from "./Photo";
import key from "weak-key";

class PhotoContainer extends Component {  
  render() {
    const photos= this.props.photos;
    return (
      <div className="flex-container">
        {photos.map(photo => (
          <Photo key={key(photo)} photoObj={photo} />)
        )}
      </div>
    );
  }
}

export default PhotoContainer;