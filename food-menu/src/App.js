import React from 'react';
import './App.css';
import ViewCategories from './views/ViewCategories';
import ViewMeal from './views/ViewMeal';
import jsonBreakfast from './data/breakfast.json';
import jsonLunch from './data/lunch.json';
import jsonDinner from './data/dinner.json';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentView: 'default',
			showHomeBtn: true,
			currentMeal: null,
			mealPicture: null,
			goBacktoView: null,
		};

		this.changeView = this.changeView.bind(this);
		this.goToHome = this.goToHome.bind(this);
	}

	changeView(category) {
		this.setState((state) => {
			return { currentView: category };
		});
	}

	goToHome() {
		this.setState({ currentView: 'default' });
	}

	render() {
		let currentView;

		switch (this.state.currentView) {
			case 'default':
				currentView = <ViewCategories changeView={this.changeView} />;
				break;
			case 'viewBreakfast':
				currentView = (
					<ViewMeal
						categoryName="== DESAYUNO =="
						dataJson={jsonBreakfast}
						showMealPicture={this.showMealPicture}
						mealBackground="bgBreakfast.png"
						goBacktoView="viewBreakfast"
						showHomeBtn={this.showHomeBtn}
					/>
				);
				break;
			case 'viewLunch':
				currentView = (
					<ViewMeal
						categoryName="== ALMUERZO =="
						dataJson={jsonLunch}
						showMealPicture={this.showMealPicture}
						mealBackground="bgLunch.png"
						goBacktoView="viewLunch"
						showHomeBtn={this.showHomeBtn}
					/>
				);
				break;
			case 'viewDinner':
				currentView = (
					<ViewMeal
						categoryName="== CENA =="
						dataJson={jsonDinner}
						showMealPicture={this.showMealPicture}
						mealBackground="bgDinner.png"
						goBacktoView="viewDinner"
						showHomeBtn={this.showHomeBtn}
					/>
				);
				break;
			default:
				currentView = <h3>No categories</h3>;
		}

		const icon =
			this.state.currentView === 'default' ? null : (
				<div className="meal-bg-icon" />
			);

		return (
			<div className="App" style={{ background: this.state.appBackground }}>
				<div
					className="App-title"
					onClick={() => alert(Object.entries(this.state))}
				>
					MENU
				</div>
				<div className="App-currentView">{currentView}</div>
				{icon}

				<div className="App-home" onClick={this.goToHome}>
					INICIO
				</div>
			</div>
		);
	}
}

export default App;
