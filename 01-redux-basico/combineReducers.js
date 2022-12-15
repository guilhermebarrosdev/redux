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

function contador(state = initialState, action) {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case SOMAR:
      return state + action.payload;
    default:
      return state;
  }
}

function modal(state = true, action) {
  switch (action.type) {
    case 'ABRIR':
      return true;
    case 'FECHAR':
      return false;
    default:
      return state;
  }
}

const reducer = Redux.combineReducers({ contador, modal });
const store = Redux.createStore(reducer);

function render() {
  const { contador, modal } = store.getState();
  const total = document.getElementById('total');
  total.textContent = contador;

  if (modal) total.style.display = 'block';
  else total.style.display = 'none';
}
render();

store.subscribe(render);
store.dispatch(somar(30));

const button = document.getElementById('button');
button.addEventListener('click', () => store.dispatch(incrementar()));

const abrir = document.getElementById('abrir');
abrir.addEventListener('click', () => store.dispatch({ type: 'ABRIR' }));

const fechar = document.getElementById('fechar');
fechar.addEventListener('click', () => store.dispatch({ type: 'FECHAR' }));
