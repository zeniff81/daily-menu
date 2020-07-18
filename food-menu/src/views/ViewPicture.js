import React, { Component } from 'react';

export default class ViewPicture extends Component {
  render() {
    const imgUrl = '/images/' + this.props.img;

    return (
      <div>
        <p>{this.props.name}</p>
        <img
          className='meal-img'
          //alt={require(this.props.img)}
          alt={'image not found'}
          src={imgUrl}
        />
      </div>
    );
  }
}
