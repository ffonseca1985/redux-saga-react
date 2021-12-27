import { createStore } from 'redux';
import contadorReducer from './reducer'

const store = createStore(timerReduce);

export default store;
