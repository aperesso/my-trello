import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editTitle} from '../actions/cards'
import {moveCard} from '../actions/cards'
import {bindActionCreators} from 'redux'

class Card extends Component {

  state = {editionMode: false}

  editCard = () => {
    this.setState({editionMode : !this.state.editionMode})
  }

  changeCard = (e) => {
    console.log(this.props.cardId, e.target.value);
    this.props.actions.editTitle({cardId: this.props.cardId, value: e.target.value});
  }

  moveCard = (e, index) => {
    this.props.actions.moveCard({cardId: this.props.cardId, newColumnId: index});
  }

  render() {

    const content = this.props.content;
    const listArray = this.props.listArray;

    return (
      <div>
        {this.state.editionMode ?
          <input value={content} onChange={this.changeCard}/> : <p>  {content} </p>}
        <button onClick={this.editCard}> {this.state.editionMode ? 'Save' : 'Edit'} </button>
        {listArray.filter((list) =>
           list.listId !== this.props.currentList ).map((list, index) =>
           <button key={index} onClick={e => this.moveCard(e, list.listId)}> {list.title} </button>)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators({editTitle, moveCard}, dispatch)
})

export default connect(null, mapDispatchToProps)(Card);
