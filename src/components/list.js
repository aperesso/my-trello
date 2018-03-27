import React, { Component } from 'react';

import Card from './card'

class Listes extends Component {

  render() {

    const cards = this.props.cards;

    return (
      <div>
		<h3> {this.props.title} </h3>
        {cards.map((card, index) =>
             card.columnId === this.props.id ?
                <Card key={index} content={card.content}/> : null)}
      </div>
    );
  }
}

export default Listes;
