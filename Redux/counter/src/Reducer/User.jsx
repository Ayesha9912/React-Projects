const Reducer= (state=false, action)=>{
    switch(action.type){
        case 'signin' : return state = true;
        default : return state
    }
}
export default Reducer;

