const Reducer = (state = 0, action) => {
    if (action.type === 'incr') {
        return state + 1
    }
    if (action.type === 'decr') {
        return state - 1
    }
    return state
}
export default Reducer;
////this is the function of counter
