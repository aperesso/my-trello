import React, { Component } from 'react';

import Card from './card'

class Listes extends Component {

  constructor() {
    super();

    this.myprops = {
      card: [
        {
          content: 'Blablabla',
          id: 1
        },
        {
          content: 'uhuzehuhd',
          id: 2
        },
        {
          content: 'jefrebfhjberf',
          id: 3
        }
      ]
    }
  }

  render() {

    const cards = this.myprops.card;

    console.log(cards);

    return (

      <div>
        {cards.map(card => <Card key={card.id} content={card.content}/>)}
      </div>
    );
  }
}

export default Listes;
