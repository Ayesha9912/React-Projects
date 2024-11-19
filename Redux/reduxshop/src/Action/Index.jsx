// export const AddCart = (product) => (
//     {
//         type: 'ADD_CART',
//         payload: product
//     }
// )

export function AddCart (product){
    return{
        type: 'ADD_CART',
        payload: product
    }
}
export function RemoveCart (id){
    // console.log("REmove Pro");
    return{
        type: 'REMOVE_CART',
        payload: id
    }
}

export function Increment (id){
    return{
        type: 'INCREMENT',
        payload: id
    }
}

export function Decrement (id){
    return{
        type: 'DECREMENT',
        payload: id
    }
}
