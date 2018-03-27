import React, { Component } from 'react';

class Card extends Component {

  render() {

    const content = this.props.content;
  
    return (
      <p> {content} </p>
    );
  }
}

export default Card;
