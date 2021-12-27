import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState} from 'react'
import {start, stop, reset, startRequest} from './actions'

export const Contador = (props) => {

    const dispatch = useDispatch();
       
    const state = useSelector((state) => state);
    const [count, setCount] = useState(state.ticker); 

    useEffect(() => {
        setCount(state.ticker)
    }, [state])

    return (
        <React.Fragment>
            <div>
                <button type="button" onClick={() => dispatch(startRequest())} >START REQUEST</button>
                <button type="button" onClick={() => dispatch(start())} >START</button>
                <button type="button" onClick={() => dispatch(stop())}>STOP</button>
                <button type="button" onClick={() => dispatch(reset())}>RESET</button>
                <br />
                Valor: {count} <br />
                Status: {state.state} <br />
                Contador: {count}
            </div>
        </React.Fragment>
    )
};

export default Contador;

