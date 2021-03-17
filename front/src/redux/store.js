import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { palindromeReducer } from './palindrome/reducer';

const reducers = combineReducers({
  palindrome: palindromeReducer
});

export const store = createStore(
  reducers,
  applyMiddleware(thunk)
);
