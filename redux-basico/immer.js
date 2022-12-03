const obj = {
  nome: 'Guilherme',
  idade: 26,
};

const obj2 = immer.produce(obj, (draft) => {
  draft.idade = 31;
});

// console.log(obj);
// console.log(obj2);

const initialState = {
  nome: 'Guilherme',
  sobre: {
    dados: {
      idade: 26,
    },
  },
};

// Com immer
const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case 'MUDAR-NOME':
      state.nome = action.payload;
      break;
    case 'MUDAR-IDADE':
      state.sobre.dados.idade = action.payload;
      break;
  }
}, initialState);

// Sem immer escrita difícil
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'MUDAR-NOME':
//       return { ...state, nome: action.payload };
//     case 'MUDAR-IDADE':
//       return {
//         ...state,
//         sobre: {
//           ...state.sobre,
//           dados: { ...state.sobre.dados, idade: action.payload },
//         },
//       };
//     default:
//       return state;
//   }
// };

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: 'MUDAR-NOME', payload: 'André' });
store.dispatch({ type: 'MUDAR-NOME', payload: 'Meryelle' });
store.dispatch({ type: 'MUDAR-NOME', payload: 'Mel' });
store.dispatch({ type: 'MUDAR-IDADE', payload: 20 });
store.dispatch({ type: 'MUDAR-IDADE', payload: 35 });
