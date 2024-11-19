
import { actionTypes } from "./Reducer";

export const RemoveCart = (id)=>({
    type:actionTypes.REMOVE_CART,
    payload: id

})
export const  ClearCart = ()=>({
    type: actionTypes.CLEAR_CART
})
export const increment = (id)=>({
    type:actionTypes.INCREMENT,
    payload: id
})
export const decrement = (id)=>({
    type:actionTypes.DECREMENT,
    payload: id
})