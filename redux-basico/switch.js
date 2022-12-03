// Constantes
const INCREMENTAR = 'INCREMENTAR';
const SOMAR = 'SOMAR';

const initialState = 0;

// Action Creator
function incrementar() {
  return { type: INCREMENTAR };
}

function somar(payload) {
  return { type: SOMAR, payload };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case SOMAR:
      return state + action.payload;
    default:
      return state;
  }
}

//
const store = Redux.createStore(reducer);

// Subscribe
function render() {
  const state = store.getState();
  const total = document.getElementById('total');
  total.textContent = state;
}
render();

store.subscribe(render);
store.dispatch(somar(30));

const button = document.getElementById('button');
button.addEventListener('click', () => store.dispatch(incrementar()));
