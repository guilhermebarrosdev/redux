import store from './store/configureStore.js';
import { incrementar } from './store/contador.js';

store.subscribe(() => {
  console.log('funcionou');
});

store.dispatch(incrementar());
