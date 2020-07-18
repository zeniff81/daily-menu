import React from 'react';
import './App.css';
import ViewCategories from './views/ViewCategories';
import ViewMeal from './views/ViewMeal';
import ViewPicture from './views/ViewPicture';
import { GiKnifeFork } from 'react-icons/gi';
import jsonBreakfast from './data/breakfast.json';
import jsonLunch from './data/lunch.json';
import jsonDinner from './data/dinner.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentView: 'default',
      currentMeal: null,
      mealPicture: null,
    };

    this.openCategory = this.openCategory.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.showMealPicture = this.showMealPicture.bind(this);
  }

  openCategory(category) {
    this.setState((state) => {
      return { currentView: category };
    });
  }

  goToHome() {
    this.setState({ currentView: 'default' });
  }

  showMealPicture(pictureFile) {
    this.setState({ mealPicture: pictureFile, currentView: 'viewPicture' });
  }

  render() {
    let currentView;

    switch (this.state.currentView) {
      case 'default':
        currentView = <ViewCategories openCategory={this.openCategory} />;
        break;
      case 'viewLunch':
        currentView = (
          <ViewMeal
            categoryName='== ALMUERZO =='
            dataJson={jsonLunch}
            showMealPicture={this.showMealPicture}
          />
        );
        break;
      case 'viewBreakfast':
        currentView = (
          <ViewMeal
            categoryName='== DESAYUNO =='
            dataJson={jsonBreakfast}
            showMealPicture={this.showMealPicture}
          />
        );
        break;
      case 'viewDinner':
        currentView = (
          <ViewMeal
            categoryName='== CENA =='
            dataJson={jsonDinner}
            showMealPicture={this.showMealPicture}
          />
        );
        break;
      case 'viewPicture':
        currentView = <ViewPicture img={this.state.mealPicture} />;
        break;
      default:
        currentView = <h3>No categories</h3>;
    }

    const icon =
      this.state.currentView === 'default' ? null : (
        <GiKnifeFork className='meal-bg-icon' />
      );
    const homeBtn =
      this.state.currentView === 'default' ? null : (
        <div className='App-home' onClick={this.goToHome}>
          INICIO
        </div>
      );

    return (
      <div className='App'>
        <div
          className='App-title'
          onClick={() => alert(Object.entries(this.state))}
        >
          MENU
        </div>
        <div className='App-currentView'>{currentView}</div>
        {icon}
        {homeBtn}
      </div>
    );
  }
}

export default App;
