import { types } from './types';

const initialState = {
  texts: []
}

export const palindromeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TEXT:
      return {
        ...state,
        texts: [
          ...state.texts,
          action.payload
        ]
      }

    default:
      return state
  }
}
