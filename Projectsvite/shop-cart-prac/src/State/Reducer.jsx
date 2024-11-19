
export const initailState = {
    cart: [],
}
export const actionTypes = {
    REMOVE_CART: "REMOVE_CART",
    CLEAR_CART: "CLEAR_CART",
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT"

}
export const reducer = (state, action) => {
   if(action.type === 'CLEAR_CART'){
     return {
        ...state , cart: []
    }
   }
   else if(action.type === 'REMOVE_CART'){
    return{
        ...state , cart: state.cart.filter((item)=> item.id !== action.payload)
    }
   }
   else if(action.type === 'INCREMENT'){
    let tempBtn = state.cart.map((item)=>{
        if(item.id === action.payload){
            return{
             ...item , amount: item.amount + 1
            }
        }
        return item
    })
    return{
        ...state , cart: tempBtn
    }
   }
   else if(action.type === 'DECREMENT'){
    let tempBtn = state.cart.map((item)=>{
        if(item.id === action.payload){
            return{
                ...item , amount : item.amount - 1
            }
        }
        return item
    })
    return{
        ...state , cart: tempBtn
    }
   }
   else{
     return{
        ...state
     }
   }
}