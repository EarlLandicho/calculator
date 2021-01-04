import logger from 'redux-logger'
import {applyMiddleware, createStore} from 'redux'
import calcListReducer from './calc/calc.reducer'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const middlewares = [logger]


const persistConfig = {
    key:'root',
    storage: storage,
    whitelist: ['calcListReducer']
}

const store = createStore(persistReducer(persistConfig, calcListReducer), applyMiddleware(...middlewares))

const persistor = persistStore(store)

export {store, persistor}