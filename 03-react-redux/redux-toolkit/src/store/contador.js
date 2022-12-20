import { createAction } from '@reduxjs/toolkit';

export const incrementar = createAction('INCREMENTAR');
export const reduzir = createAction('REDUZIR');

function contador(state = 0, action) {
  switch (action.type) {
    case incrementar.type:
      return state + 1;
    case reduzir.type:
      return state - 1;
    default:
      return state;
  }
}

export default contador;
