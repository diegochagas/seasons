import React from 'react';
import './Error.css';

export default class Error extends React.Component {
  render(){
    return(
      <div className="error">
        <h1>
          <span>Error: </span>
          <span>{this.props.message}</span>
        </h1>
      </div>
    );
  }
}