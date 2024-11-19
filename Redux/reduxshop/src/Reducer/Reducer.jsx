const initialState = {
    cart: []
}
const Reducer = (state = initialState , action)=>{
    console.log(action);
    switch(action.type)
    {
        case 'ADD_CART':
        const existingEle = state.cart.find((item)=>{
            console.log(item.id, "item");
            return item.id === action.payload.id
        })
        console.log(existingEle)
        if(existingEle){
            return{
                ...state, cart: state.cart.map(item => item.id === action.payload.id ? 
                    {quantity: item.quantity + 1 , price: item.price + action.payload.price}:item)
            }
        }
        else{
            return{
                ...state, cart: [...state.cart, {...action.payload , quantity: 1}]
            }
        }
        case 'REMOVE_CART':
            return{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
            case 'INCREMENT':
                return{
                    ...state, cart: state.cart.map(item=> item.id=== action.payload ? {...item,quantity: item.quantity+1 , price: item.price + (item.price/item.quantity)} : item)
                }
              case 'DECREMENT':
              return{
                ...state, cart: state.cart.map(item=> item.id === action.payload && item.quantity > 1 ? { ...item,quantity: item.quantity-1 , price: item.price - (item.price/item.quantity)}: item)
              }  
                default:
                    return state;
        }
    }
export default Reducer;

