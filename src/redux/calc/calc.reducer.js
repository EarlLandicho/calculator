
import {concatToInput, doOperation} from "./calc.utils"

const INITIAL_STATE = {
    firstInput: "",
    secondInput: "",
    finalResult: "",
    operation: ""
}

export default function calcListReducer(state = INITIAL_STATE, action)
{
    switch(action.type)
    {
        case 'UPDATE_INPUT':
            return {
                ...state,
                firstInput: concatToInput(state.firstInput, action.payload)
            }
        case 'CLEAR_ALL':
            return {
                ...state,
                firstInput: "",
                secondInput: "",
                finalResult: "",
                operation: ""
            }
        case 'ADD':
            return {
                ...state,
                firstInput: "",
                secondInput: state.firstInput,
                operation: "+"
            }
        case 'SUBTRACT':
            return {
                ...state,
                firstInput: "",
                secondInput: state.firstInput,
                operation: "-"
            }
        case 'MULTIPLY':
            return {
                ...state,
                firstInput: "",
                secondInput: state.firstInput,
                operation: "*"
            }
        case 'DIVIDE':
            return {
                ...state,
                firstInput: "",
                secondInput: state.firstInput,
                operation: "/"
            }
        case 'ENTER':
            return {
                ...state,
                finalResult: doOperation(state.firstInput, state.secondInput, state.operation),
                firstInput: "",
                secondInput: "",
                operation: ""
            }
        case 'SIN':
            return {
                ...state,
                operation: "sin"
                
            }
        case 'COS':
            return {
                ...state,
                operation: "cos"
                
            }
        case 'TAN':
            return {
                ...state,
                operation: "tan"
                
            }
        case 'TO_KILOGRAMS':
            return {
                ...state,
                finalResult: doOperation(state.firstInput, state.secondInput, "to_kilograms")
                
            }
        case 'TO_POUNDS':
            return {
                ...state,
                finalResult: doOperation(state.firstInput, state.secondInput, "to_pounds")
                
            }
        default:
            return state
    }
}