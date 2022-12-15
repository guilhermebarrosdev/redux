const initialState = {
  name: 'Guilherme',
  id: 9,
};

function reducer(state = initialState, action) {
  return state;
}

const store = Redux.createStore(reducer);
const state = store.getState();
console.log(state.name);
