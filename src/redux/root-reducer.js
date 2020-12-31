
import {combineReducers} from 'redux'


const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
})


export default rootReducer