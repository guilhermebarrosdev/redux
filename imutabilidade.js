const array = [0, 1, 2, 3, 4];
const array2 = array.filter((item) => item > 1);

// console.log(array2 === array);
// console.log(array);
// console.log(array2);

const obj = {
  nome: 'Guilherme',
  idade: 26,
};

const obj2 = { ...obj, nome: 'Maria' };
// const obj2 = Object.assign({}, obj, { nome: 'Lucas' });
console.log(obj === obj2);
console.log(obj);
console.log(obj2);

const initialState = {
  nome: 'Guilherme',
  idade: 26,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'MUDAR-NOME':
      return { ...state, nome: action.payload };

    default:
      return state;
  }
}

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: 'MUDAR-NOME', payload: 'André' });
store.dispatch({ type: 'MUDAR-NOME', payload: 'Meryelle' });
store.dispatch({ type: 'MUDAR-NOME', payload: 'Mel' });
