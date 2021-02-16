import React from 'react'
import { connect } from 'react-redux'
import { toKilograms, toPounds } from '../redux/calc/calc.actions'
import { getFinalResult, getFirstInput, getOperation } from '../redux/calc/calc.selector'
import {createStructuredSelector} from 'reselect'

function ConversionOperations({toKiloGrams, toPounds, firstInput, operation, finalResult})
{
    return(
        <div>
            <button onClick = {() => toKiloGrams()}>Convert to kilograms</button>
            <button onClick = {() => toPounds()}>Convert to pounds</button>


            <h3>{operation} {firstInput}</h3>
            <h1>{finalResult}</h1>
        </div>
    )


}


const mapDispatchToProps = dispatch => (
    {
        toKiloGrams: () => {
            dispatch(toKilograms())
        },

        toPounds: () => {
            dispatch(toPounds())
        }
    }
)

const mapStateToProps = createStructuredSelector({
    firstInput: getFirstInput,
    finalResult: getFinalResult,
    operation: getOperation
})

export default connect(mapStateToProps, mapDispatchToProps)(ConversionOperations)