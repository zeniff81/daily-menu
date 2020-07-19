import React, { Component } from 'react';
import ViewMeal from './ViewMeal';
import breakfast from '../data/breakfast.json';

export default class ViewBreakfast extends Component {
  render() {
    return (
      <div>
        <ViewMeal dataJson={breakfast} />
      </div>
    );
  }
}
