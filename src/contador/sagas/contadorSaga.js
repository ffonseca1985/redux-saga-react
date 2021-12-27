
import { call, put, takeLatest } from 'redux-saga/effects'
import { start } from '../actions'

let cont = 1;

function* contRequestAsync() {
    yield call(log, 'aqui');
    yield put(start())
}

function* log(msg) {

   return  new Promise(resolve => {
        console.log(msg + cont)
        cont++;
    });

    //teste.then(x => { console.log(x)})
}

function* contRequest(tes) {
    yield takeLatest("START_REQUEST", contRequestAsync);
}

export default contRequest;
