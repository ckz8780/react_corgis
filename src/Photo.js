import React, { Component } from 'react';

class Photo extends Component {
  render() {
    const photo = this.props.photoObj;
    return (
      <div style={photo.styles}>
        <img src={photo.src} alt={photo.alt} />
      </div>
    );
  }
}

export default Photo;