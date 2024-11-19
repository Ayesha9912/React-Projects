export const reducer = (state, action)=> {
    console.log(state, action);

    switch( action.type ){
        case 'Inc': 
            return state + 1;
        break;
        case 'Dec':
            return state - 1
        default: 
            return state
    }

}