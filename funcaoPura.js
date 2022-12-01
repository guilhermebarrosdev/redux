function reducer(state = 0, action) {
  switch (action.type) {
    case 'MODIFICAR-WIDTH':
      // Não criar efeitos colaterais
      // const caixa = document.getElementById('caixa');
      // caixa.style.width = action.payload + 'px';
      return action.payload;

    default:
      return state;
  }
}

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function render() {
  // Efeito colateral no render, assim é o correto
  const caixa = document.getElementById('caixa');
  caixa.style.width = store.getState() + 'px';
}
store.subscribe(render);

store.dispatch({ type: 'MODIFICAR-WIDTH', payload: 100 });
store.dispatch({ type: 'MODIFICAR-WIDTH', payload: 20 });
store.dispatch({ type: 'MODIFICAR-WIDTH', payload: 30 });
store.dispatch({ type: 'MODIFICAR-WIDTH', payload: 200 });

console.log(store.getState());
