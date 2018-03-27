import React, { Component } from 'react';
import { connect } from 'react-redux';

import Liste from './list'

class Tableau extends Component {

    render() {

        const { title, lists, cards } = this.props;

        return (
            <div>
                <h1> {title} </h1>
                {lists.map((list, index) =>
                    <Liste key={index} title={list.title} id={list.listId} cards={cards}/>)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
  lists: state.lists.datas,
  cards: state.cards.datas
});

export default connect(mapStateToProps)(Tableau);
