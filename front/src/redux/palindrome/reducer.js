import { types } from './types';

const initialState = {
  texts: []
}

export const palindromeReducer = (state = initialState, action) => {

  if (action.type === types.SET_TEXT) {
    state.texts.unshift(action.payload);

    return {
      ...state,
      texts: state.texts
    };
  }

  return state;
}
