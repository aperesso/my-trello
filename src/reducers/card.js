import { createReducer } from 'redux-create-reducer';
import {EDIT_TITLE, MOVE_CARD, ADD_CARD} from '../constants/cards'


const intialState = {
    datas: [
      {
        content: 'Blablabla',
        columnId: 'hz',
        cardId: 'a'
      },
      {
        content: 'uhuzehuhd',
        columnId: 'hz',
        cardId: 'b'


      },
      {
        content: 'jefrebfhjberf',
        columnId: 'h',
        cardId: 'c'

      },
      {
        content: 'yezgyzr',
        columnId: 'h',
        cardId: 'd'

      },
      {
        content: 'hilrehheri',
        columnId: 'piop',
        cardId: 'e'

      },
      {
        content: 'elhiueuihezifeiuzh',
        columnId: 'piop',
        cardId: 'f'

      }
    ]}

const reduceFunctions = {
  [EDIT_TITLE] : (state, action) => ({
      datas: state.datas.map((data) => {
      return  data.cardId !== action.payload.cardId ?
          (data) : ({...data, content: action.payload.value})
      })
  }),
  [MOVE_CARD] : (state, action) => ({
      datas: state.datas.map((data) => {
        return (data.cardId !== action.payload.cardId ?
          (data) : {...data, columnId: action.payload.newColumnId})
      })
  }),
  [ADD_CARD] : (state, action) => ({
    datas: [...state.datas, {content: action.payload.content,
        columnId: action.payload.column, cardId: new Date().getTime().toString()}]
  })
}

const reducer = createReducer(intialState, reduceFunctions)

export default reducer;
