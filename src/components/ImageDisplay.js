import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  render(){

  let imgStyle = {
      width: "200px",
      height: '200px'
    }

  let photosArray = this.props.photos;
  let photosDisplay = photosArray.map((imgURL)=>{
    return (
      <li key={imgURL.id}>
        <img style={imgStyle} src={imgURL.img_src} />
      </li>
    )
  })
  return (
    <div className="imageDisplay">
      <ul>
        {photosDisplay}
      </ul>
    </div>
  )

}
}
