import Count from "./Count";
import User from './User'
import { combineReducers } from 'redux';

const AllReducers=combineReducers(
    {
    count: Count,
    user: User
    }
)
export default AllReducers


