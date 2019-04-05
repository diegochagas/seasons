import React from 'react';

export default class Error extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class="error">
        <span>Error: </span>
        <span>{this.state.errorMessage}</span>
      </div>
    );
  }
}