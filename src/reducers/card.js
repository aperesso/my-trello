import { createReducer } from 'redux-create-reducer';

const intialState = {
    datas: [
      {
        content: 'Blablabla',
        columnId: 1
      },
      {
        content: 'uhuzehuhd',
        columnId: 1
      },
      {
        content: 'jefrebfhjberf',
        columnId: 2
      },
      {
        content: 'yezgyzr',
        columnId: 2
      },
      {
        content: 'hilrehheri',
        columnId: 3
      },
      {
        content: 'elhiueuihezifeiuzh',
        columnId: 3
      }
    ]}

const reduceFunctions = {
}

const reducer = createReducer(intialState, reduceFunctions)

export default reducer;
