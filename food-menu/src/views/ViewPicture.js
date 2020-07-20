import React, { Component } from 'react';
import '../css/viewPicture.css';

export default class ViewPicture extends Component {
	render() {
		const imgUrl = 'images/' + this.props.img;
		const goBack = this.props.goBack;

		return (
			<div className="viewPicture">
				<p>{this.props.pictureTitle}</p>
				<div className="img-container">
					<img
						className="meal-img"
						alt=""
						src={imgUrl}
						onClick={() => goBack()}
					/>
				</div>
			</div>
		);
	}
}
