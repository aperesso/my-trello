import { createReducer } from 'redux-create-reducer';
import {EDIT_TITLE} from '../constants/lists'

const intialState = {
    datas: [
        {
            title: 'À faire',
            listId: 'hz',
        },
        {
            title: 'En cours',
            listId: 'h'
        },
        {
            title: 'Terminé',
            listId: 'piop'
        }
    ]}

const reduceFunctions = {
  [EDIT_TITLE] : (state, action) => ({
      datas: state.datas.map((data) => {
      return  data.listId !== action.payload.listId ?
          (data) : ({...data, title: action.payload.value})
      })
  })
}

const reducer = createReducer(intialState, reduceFunctions)

export default reducer;
