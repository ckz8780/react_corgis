import React, { Component } from 'react';
import './Gallery.css';
import PhotoContainer from "./PhotoContainer";
import key from "weak-key";

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photoCount: 10,
      domainStub: "http://www.placekitten.com",
      minWidth: 2,
      maxWidth: 4,
      minHeight: 1,
      maxHeight: 4
    };
  }

  getRandomSize = (min, max) => {
    /* 
      Generates a random multiple of 100 for image sizing 
    */

    return 100*(Math.floor(Math.random() * (max - min + 1) ) + min);
  }

  generatePhotos = (count, domain, minMaxWidth, minMaxHeight) => {
    /* 
      Given a number of photos, a domain, and min/max heights/widths,
      returns an array of photo URLs to be rendered together w/ their
      aspect ratios for flexible sizing.
    */

    let photos = {};
    for(let i = 0; i<count; i++) {
      let photo = {};

      photo['width'] = String(this.getRandomSize(minMaxWidth[0], minMaxWidth[1]));
      photo['height'] = String(this.getRandomSize(minMaxHeight[0], minMaxHeight[1]));
      photo['aspectRatio'] = 100*(photo['width']/photo['height']);
      photo['src'] = `${domain}/${photo['width']}/${photo['height']}/`;
      photo['styles'] = {flex: `${photo['aspectRatio']} auto`};
      photo['alt'] = `corgi photo ${photo['width']} by ${photo['height']} pixels`;

      if(photos[photo['height']] === undefined){
        photos[photo['height']] = [photo];
      } else {
        photos[photo['height']].push(photo);
      }
    }
    return photos;
  }

  handleChange = e => {
    /* 
      Handle changing number of photos, min/max width/height, etc.
    */

    switch(e.target.id) {
      case "corgi-count":
        return this.setState({
          photos: {},
          photoCount: Math.trunc(e.target.value)
        });
      case "corgi-minwidth":
        return this.setState({
          photos: {},
          minWidth: Math.trunc(e.target.value)
        });
      case "corgi-maxwidth":
        return this.setState({
          photos: {},
          maxWidth: Math.trunc(e.target.value)
        });
      case "corgi-minheight":
        return this.setState({
          photos: {},
          minHeight: Math.trunc(e.target.value)
        });
      case "corgi-maxheight":
        return this.setState({
          photos: {},
          maxHeight: Math.trunc(e.target.value)
        });
      default:
        return null;
    }
  }

  render() {
    const { photoCount, domainStub, minWidth, maxWidth, minHeight, maxHeight } = this.state;
    const photos = this.generatePhotos(photoCount, domainStub, [minWidth, maxWidth], [minHeight, maxHeight]);
    return (
      <React.Fragment>
        <div className="page-header has-text-centered">
          <h1 className="title has-text-primary is-size-1">Corgis! Bork Bork!</h1>
        </div>
        <div className="header-form">
          <div className="field is-grouped">
            <div className="control is-expanded has-text-centered">
              <label className="label is-medium">How many corgis can you handle?</label>
              <input id="corgi-count" className="input is-medium" type="number" min={1} max={100} defaultValue={photoCount} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control is-expanded has-text-centered">
              <label className="label is-medium">Minimum Corgi Fatness</label>
              <input id="corgi-minwidth" className="input is-medium" type="number" min={1} max={maxWidth} defaultValue={minWidth} onChange={this.handleChange}/>
            </div>
            <div className="control is-expanded has-text-centered">
              <label className="label is-medium">Maximum Corgi Fatness</label>
              <input id="corgi-maxwidth" className="input is-medium" type="number" min={minWidth} max={10} defaultValue={maxWidth} onChange={this.handleChange}/>
            </div>
            <div className="control is-expanded has-text-centered">
              <label className="label is-medium">Minimum Corgi Height</label>
              <input id="corgi-minheight" className="input is-medium" type="number" min={1} max={maxHeight} defaultValue={minHeight} onChange={this.handleChange}/>
            </div>
            <div className="control is-expanded has-text-centered">
              <label className="label is-medium">Maximum Corgi Height</label>
              <input id="corgi-maxheight" className="input is-medium" type="number" min={minHeight} max={10} defaultValue={maxHeight} onChange={this.handleChange}/>
            </div>
          </div>
        </div>
        {Object.keys(photos).map(k => (
            <PhotoContainer key={key(photos[k])} photos={photos[k]} />
          )
        )}
      </React.Fragment>
    );
  }
}

export default Gallery;
