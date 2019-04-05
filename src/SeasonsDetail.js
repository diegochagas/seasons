import React from 'react';

export default class SeasonsDetail extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="seasons-detail">
				<span>Latitude: </span>
				<span>{this.props.latitude}</span>
			</div>
		);
	}
}