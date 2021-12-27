import React from 'react'
import Contador from './contador/component'
import { Provider } from 'react-redux'
import contadorReducer from './contador/reducer'
import {applyMiddleware  } from 'redux';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootSaga from './contador/sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)
const store = createStoreWithMiddleware(contadorReducer);

function App() {
  return (
    <Provider store={store}>
        <Contador />
    </Provider>
  );
}

sagaMiddleware.run(rootSaga)
export default App;