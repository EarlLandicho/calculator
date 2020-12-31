import logger from 'redux-logger'
import {applyMiddleware, createStore} from 'redux'
import calcListReducer from './calc/calc.reducer'

const middlewares = [logger]

const store = createStore(calcListReducer, applyMiddleware(...middlewares))

export default store