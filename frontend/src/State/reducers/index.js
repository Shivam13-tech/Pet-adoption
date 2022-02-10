import {combineReducers} from 'redux'
import accountReducer from './accountReducer';


const reducers = combineReducers({
    account: accountReducer         //Generates the key account with value ie our state from account reducer fnc(bank)
})



export default reducers;