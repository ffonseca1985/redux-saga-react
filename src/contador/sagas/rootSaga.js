import { all } from 'redux-saga/effects';
import contRequest from './contadorSaga'

export default function* rootSaga(){
    yield all([
        contRequest()
    ])
}