import { configureStore } from '@reduxjs/toolkit';
import contador from './contador';

const store = configureStore({ reducer: contador });

export default store;
