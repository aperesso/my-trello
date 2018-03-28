import {createAction} from 'redux-actions';
import {EDIT_TITLE, MOVE_CARD, ADD_CARD} from '../constants/cards'


export const editTitle = createAction(EDIT_TITLE);
export const moveCard = createAction(MOVE_CARD);
export const addCard = createAction(ADD_CARD);
