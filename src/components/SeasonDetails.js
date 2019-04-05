import React from 'react';
import './SeasonDetails.css';

export default class SeasonsDetail extends React.Component {
	render(){
    const season = this.getSeason(this.props.latitude, new Date().getMonth());
		return(
			<div className={`season-details ${season}`}>
        <i className={`fas fa-${configSeason[season].iconName} icon-left`}></i>
				<h1>{configSeason[season].text}</h1>
        <i className={`fas fa-${configSeason[season].iconName} icon-right`}></i>
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
