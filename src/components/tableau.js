import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editTitle} from '../actions/lists'
import {bindActionCreators} from 'redux'


import Liste from './list'

class Tableau extends Component {

    onAskEditColumnTitle = (listId, value) => {
      console.log(listId, value);
      this.props.actions.editTitle({listId, value})
    }

    render() {

        const { title, lists, cards } = this.props;

        console.log(lists)

        return (
            <div className="Tableau">
                <h1> {title} </h1>
                <div className ="wrapper">
                  {lists.map((list, index) =>
                      <Liste key={index}
                             title={list.title}
                             id={list.listId}
                             cards={cards}
                             onAskEditColumnTitle={this.onAskEditColumnTitle}
                             listArray={lists}
                      />)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  lists: state.lists.datas,
  cards: state.cards.datas
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators({editTitle}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Tableau);
