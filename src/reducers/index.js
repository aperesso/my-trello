import { combineReducers } from 'redux';

import lists from './list';
import cards from './card';

const reducers = combineReducers({
	lists,
	cards
});

export default reducers;
