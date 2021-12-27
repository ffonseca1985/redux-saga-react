
import { actionTypes } from './actions'

export const INITIAL_STATE = {
    state: actionTypes.STOP,
    ticker: 0
}

const contadorReducer = (state = INITIAL_STATE, action = null) => {

    switch (action.type) {
        case actionTypes.STOP:
            return {
                ...state,
                state: actionTypes.STOP
            }
        case actionTypes.START:
            return {
                ...state,
                ticker: state.ticker + 1,
                state: actionTypes.START
            }
        case actionTypes.RESET:
            return {
                ...state,
                ticker: 0,
                state: actionTypes.RESET
            }
        default:
            return state;
    }
};

export default contadorReducer; 