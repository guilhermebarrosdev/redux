import store from './store/configureStore.js';
import { tokenFetch } from './store/token.js';

store.dispatch(tokenFetch({ username: 'dog', password: 'dog' }));
