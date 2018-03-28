import React, { Component } from 'react';

import Card from './card'
import NewCard from './NewCard'
class Listes extends Component {


  state = { editionMode: false }

  editTitle = () => {
    this.setState({editionMode: !this.state.editionMode})
  }

  changeTitle = e => {
    this.props.onAskEditColumnTitle(this.props.id, e.target.value);
  }

  render() {

    const cards = this.props.cards;


    return (
      <div className="lists">

          {this.state.editionMode ?
             <input value={this.props.title} onChange={this.changeTitle}/> :
              <h3> {this.props.title} </h3>}
          <button onClick={this.editTitle}> {this.state.editionMode ? 'Save' : 'Edit'} </button>
          {cards.filter((card) => card.columnId === this.props.id)
            .map((card, index) =>
              <Card key={index}
              cardId={card.cardId}
              content={card.content}
              listArray = {this.props.listArray}
              currentList = {this.props.id}/>)}
          <NewCard currentList = {this.props.id}/>
      </div>
    );
  }
}

export default Listes;
