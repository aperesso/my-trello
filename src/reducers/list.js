import { createReducer } from 'redux-create-reducer';

const intialState = {
    datas: [
        {
            title: 'Première liste',
            listId: 1,
        },
        {
            title: 'Seconde liste',
            listId: 2
        },
        {
            title: 'Troisième liste',
            listId: 3
        }
    ]}

const reduceFunctions = {
}

const reducer = createReducer(intialState, reduceFunctions)

export default reducer;
