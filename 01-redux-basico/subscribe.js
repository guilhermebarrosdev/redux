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

// Subscribe
function render() {
  const state = store.getState();
  const total = document.getElementById('total');
  total.textContent = state;
}
render();

const unsubscribe = store.subscribe(render);
store.dispatch(somar(25));
unsubscribe();

store.subscribe(() => {
  console.log('aconteceu');
});

const button = document.getElementById('button');
button.addEventListener('click', () => store.dispatch(incrementar()));
