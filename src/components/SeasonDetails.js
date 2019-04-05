import React from 'react';
import './SeasonDetails.css';

export default class SeasonsDetail extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
    const season = this.getSeason(this.props.latitude, new Date().getMonth());

		return(
			<div className={`season-details ${season}`}>
        <span className={`icon ${configSeason[season].iconName}`}></span>
				<span>{configSeason[season].text}</span>
        <span className={`icon ${configSeason[season].iconName}`}></span>
			</div>
		);
  }
  
  getSeason(latitude, month){
    if(month > 2 && month > 9){
      return latitude > 0 ? 'summer': 'winter';
    } else {
      return latitude > 0 ? 'winter' : 'summer';
    }
  }

}

const configSeason = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr it is cold!",
    iconName: "snowflake"
  }
}
