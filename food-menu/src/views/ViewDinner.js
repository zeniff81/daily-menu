import React, { Component } from 'react';
import ViewMeal from './ViewMeal';
import dinner from '../data/dinner.json';

export default class ViewDinner extends Component {
  render() {
    return (
      <div>
        <ViewMeal dataJson={dinner} />
      </div>
    );
  }
}
