const initialState = {
    users: [],
    user : null
}
const Reducer = (state = initialState, action) => {
    switch (action.type){
        case 'REGISTER':
            return{
                ...state,
                users: [...state.users,action.payload]
            }
        case ' LOGIN':
            return{
                ...state, user : action.payload
            }
        case 'LOGOUT':
            return{
                ...state, users: null
            }
        default: return state;
    }
}
export default Reducer;