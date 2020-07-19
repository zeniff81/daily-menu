import React, { Component } from 'react';
import ViewMeal from './ViewMeal';
import lunch from '../data/lunch.json';

export default class ViewLunch extends Component {
  render() {
    return (
      <div>
        <ViewMeal dataJson={lunch} />
      </div>
    );
  }
}
