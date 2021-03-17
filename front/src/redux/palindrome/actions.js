import axios from 'axios';

import { types } from './types';

const setText = (textResponse) => ({
  type: types.SET_TEXT,
  payload: textResponse
});

// Accion para enviar el texto al servidor
export const sendText = (text) => {
  return (dispatch) => {
    axios.get(`http://localhost:3000/iecho?text=${text}`)
      .then(({ data }) => {
        console.log(data);
        dispatch(setText(data));
      });
  }
}
