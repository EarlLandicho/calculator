import {createSelector} from 'reselect'

const calculator = state => state;

export const getFirstInput = createSelector(
    [calculator],
    (
        calculator => calculator.firstInput
    )
)

export const getSecondInput = createSelector(
    [calculator],
    (
        calculator => calculator.secondInput
    )
)


export const getFinalResult = createSelector(
    [calculator],
    (
        calculator => calculator.finalResult
    )
)


export const getOperation = createSelector(
    [calculator],
    (
        calculator => calculator.operation
    )
)