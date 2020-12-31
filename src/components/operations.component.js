import React from 'react'
import {connect} from 'react-redux'
import {add, clearAll, cos, divide, enter, multiply, sin, subtract, tan} from '../redux/calc/calc.actions'



function MathOperations({add, clearAll, divide, enter, multiply, subtract, sin, cos, tan})
{

    return(
        <div>
            <button onClick = {() => clearAll()}>Clear All</button>
            <button onClick = {() => enter()}>Enter</button>
            <br></br>
            <button onClick = {() => sin()}>sin</button>
            <button onClick = {() => cos()}>cos</button>
            <button onClick = {() => tan()}>tan</button>
            <br></br>
            <button onClick = {() => add()}>+</button>
            <button onClick = {() => subtract()}>-</button>
            <button onClick = {() => multiply()}>*</button>
            <button onClick = {() => divide()}>/</button>
            
        </div>
    )
}


const mapDispatchToProps = dispatch => (
    {
        clearAll: () => {
            dispatch(clearAll())
        },

        add: () => {
            dispatch(add())
        },

        subtract: () => {
            dispatch(subtract())
        },

        multiply: () => {
            dispatch(multiply())
        },

        divide: () => {
            dispatch(divide())
        },

        enter: () => {
            dispatch(enter())
        },

        sin: () => {
            dispatch(sin())
        },

        cos: () => {
            dispatch(cos())
        },

        tan: () => {
            dispatch(tan())
        }
    }
)

export default connect(null, mapDispatchToProps)(MathOperations);
