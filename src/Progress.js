import React from 'react';

export default class Progress extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <progress></progress>
        <p>{this.props.message}</p>
      </div>
    );
  }
}