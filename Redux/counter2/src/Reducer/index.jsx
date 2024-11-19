import { combineReducers } from 'redux'
import Count from './Count'
let AllReducers = combineReducers({
    count: Count
})
export default AllReducers