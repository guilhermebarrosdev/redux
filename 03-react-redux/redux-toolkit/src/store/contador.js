import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contador',
  initialState: {
    total: 0,
  },
  reducers: {
    incrementar(state) {
      state.total++;
    },
    reduzir(state) {
      state.total--;
    },
  },
});

// function contador(state = 0, action) {
//   switch (action.type) {
//     case incrementar.type:
//       return state + 1;
//     case reduzir.type:
//       return state - 1;
//     default:
//       return state;
//   }
// }

export const { incrementar, reduzir } = slice.actions;
export default slice.reducer;
