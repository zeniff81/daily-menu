import React from 'react';
import '../css/meal.css';
import ViewPicture from './ViewPicture';

class ViewMeal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPicture: false,
      mealPicture: null,
      pictureTitte: null,
      scroll: 0,
    };

    this.showMealPicture = this.props.showMealPicture;
  }

  showPicture(value, picture, pictureTitle) {
    this.setState({
      showPicture: value,
      mealPicture: picture,
      pictureTitle: pictureTitle,
    });
  }

  importData() {
    const data = Object.values(this.props.dataJson);

    const meals = data.map((meal, idx) => {
      const name = <div>{meal.name}</div>;
      const ingredients = meal.ingredients.map((ing) => (
        <button key={ing} className='meal-ingredient'>
          {ing}
        </button>
      ));

      return (
        <div
          className='meal'
          onClick={() => this.showPicture(true, meal.img, meal.name)}
          ref={this.meals}
        >
          <div className='meal-name'>{name}</div>
          <div>{ingredients}</div>
          <div className='meal-number'>{idx + 1}</div>
        </div>
      );
    });

    return meals;
  }

  render() {
    const meals = this.importData();

    if (this.state.showPicture) {
      return (
        <ViewPicture
          goBack={() => this.showPicture(false, null, null)}
          img={this.state.mealPicture}
          pictureTitlte={this.state.pictureTitle}
        />
      );
    }
    return (
      <div className='meals-container'>
        <img
          alt=''
          src={'/images/' + this.props.mealBackground}
          className='meal-background'
        />
        <div className='category-name'>{this.props.categoryName}</div>
        <div className='meals'>{meals}</div>
      </div>
    );
  }
}

export default ViewMeal;
