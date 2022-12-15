const initialState = {
  loading: false,
  data: null,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_STARTED':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { data: action.payload, loading: false, error: null };
    case 'FETCH_FAIL':
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

// redux thunk
const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

const { applyMiddleware, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = Redux.createStore(reducer, enhancer);

function incrementar() {
  return { type: 'INCREMENTAR' };
}

// Função  currying
function fetchUrl(url) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_STARTED' });
      const data = await fetch(url).then((res) => res.json());
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_FAIL', payload: error.message });
    }
  };
}

store.dispatch(fetchUrl('https://dogsapi.origamid.dev/json/api/photo'));
store.dispatch(incrementar());
