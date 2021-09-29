import React from "react";
import {useStore} from '../store/store'





export function CounterPanel(){
    const counter= useStore(state => state.count);
    const inc = useStore(state => state.inc);


    return (
        <div>
            <div> {counter}</div>
            <button onClick={inc}>+</button>

        </div>
    )



}