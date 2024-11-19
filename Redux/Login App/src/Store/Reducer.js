import {createStore} from "redux";
let initialState = {
    users: [],
    loginUser: null
}
let reducer = (state = initialState, action) => {
    switch (action.type){
        case "REGISTER":
            return{
                ...state,
                users: [...state.users,action.payload]
            }
            case"LOGIN":
            return{
                ...state,
                user : action.payload
            }
            case"LOGOUT":
            return{
                ...state,
                user : null
            }

            default :
            return state
    }
}
export default  createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())