import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addCard} from '../actions/cards'
import {bindActionCreators} from 'redux'


class NewCard extends Component {

  state = {
    content: ''
  }

  changeNewCard = (c) => {
    this.setState({content : c.target.value} )
  }

  addNewCard = (content, column) => {
    this.props.actions.addCard({content, column})
    this.setState({content: ''});
  }

  render() {

    return (
      <form className="newcard">

         <input type="text" placeholder="Add your card"
            value={this.state.content} onChange={this.changeNewCard}/>
         <button type='button' onClick={(e) => this.addNewCard(this.state.content, this.props.currentList)}> + </button>

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators({addCard}, dispatch)
})


export default connect(null, mapDispatchToProps)(NewCard);
