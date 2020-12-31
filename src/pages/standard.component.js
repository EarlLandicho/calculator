import React from 'react'
import {connect} from 'react-redux'
import Keypad from '../components/keypad.component'
import MathOperations from '../components/operations.component'
import {createStructuredSelector} from 'reselect'
import { getFinalResult, getFirstInput, getOperation, getSecondInput } from '../redux/calc/calc.selector'

function StandardCalculatorPage({firstInput, secondInput, finalResult, operation})
{
    return(
        <div>
            <MathOperations />
            <Keypad />
            
            
            <h3>{secondInput} {operation} {firstInput}</h3>
            <h1>{finalResult}</h1>
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    firstInput: getFirstInput,
    secondInput: getSecondInput,
    finalResult: getFinalResult,
    operation: getOperation
})


// const mapStateToProps = state => ({
//     firstInput: state.firstInput,
//     secondInput: state.secondInput,
//     operation: state.operation,
//     finalResult: state.finalResult
// })
    


export default connect(mapStateToProps)(StandardCalculatorPage);
