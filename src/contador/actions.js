export const actionTypes = { 
    START: "START",
    STOP: "STOP",
    RESET: "RESET",
    START_REQUEST: "START_REQUEST",       
}

export const start = () => {
    return {  
            type: actionTypes.START
    }
}

export const startRequest = () => {
    return {  
            type: actionTypes.START_REQUEST
    }
}

export const stop = () => ({
    type: actionTypes.STOP
})

export const reset = () => ({
    type: actionTypes.RESET
})
