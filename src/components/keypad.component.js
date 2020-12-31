import React from 'react'
import {connect} from 'react-redux'
import {updateInput} from '../redux/calc/calc.actions'


function KeyPad({updateInput})
{
    return(
        <div>
            <button onClick = {() => updateInput(7)}>7</button>
            <button onClick = {() => updateInput(8)}>8</button>
            <button onClick = {() => updateInput(9)}>9</button>
            <br></br>
            <button onClick = {() => updateInput(4)}>4</button>
            <button onClick = {() => updateInput(5)}>5</button>
            <button onClick = {() => updateInput(6)}>6</button>
            <br></br>
            <button onClick = {() => updateInput(1)}>1</button>
            <button onClick = {() => updateInput(2)}>2</button>
            <button onClick = {() => updateInput(3)}>3</button>
            <br></br>
            <button onClick = {() => updateInput(0)}>0</button>
        </div>
        
    )



}

const mapDispatchToProps = dispatch => (
    {
        updateInput: (input) => {
            dispatch(updateInput(input))
        }
    }
)

export default connect(null, mapDispatchToProps)(KeyPad);

