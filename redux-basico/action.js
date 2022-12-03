// Constantes
const INCREMENTAR = 'INCREMENTAR';
const SOMAR = 'SOMAR';

const initialState = 10;

// Action Creator
function incrementar() {
  return { type: INCREMENTAR };
}

function somar(payload) {
  return { type: SOMAR, payload };
}

function reducer(state = initialState, action) {
  if (action.type === INCREMENTAR) return state + 1;
  if (action.type === SOMAR) return state + action.payload;
  return state;
}

//
const store = Redux.createStore(reducer);
let state = store.getState();
console.log(state);

store.dispatch(somar(50));
store.dispatch(incrementar());

state = store.getState();
console.log(state);

const button = document.getElementById('button');
button.addEventListener('click', () => store.dispatch(incrementar()));
