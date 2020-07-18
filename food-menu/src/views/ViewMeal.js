import React from 'react';
import '../css/meal.css';
import { GiTwinShell } from 'react-icons/gi';

class ViewMeal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPicture: false,
    };

    this.showMealPicture = this.props.showMealPicture;
  }

  render() {
    console.log('props:', this.props);
    const data = Object.values(this.props.dataJson);
    const { currentView } = this.props;

    const meals = data.map((el) => {
      const name = <div>{el.name}</div>;
      const ingredients = el.ingredients.map((ing) => (
        <button key={ing} className='meal-ingredient'>
          {ing}
        </button>
      ));

      return (
        <div
          className='meal'
          key={el.name}
          onClick={() =>
            this.showMealPicture({ img: el.img, currentView: currentView })
          }
        >
          <div className='meal-name' key={el.name}>
            {name}
          </div>
          <div>{ingredients}</div>
        </div>
      );
    });
    return (
      <div>
        <div className='category-name'>{this.props.categoryName}</div>
        <div className='meals'>{meals}</div>
      </div>
    );
  }
}

export default ViewMeal;
