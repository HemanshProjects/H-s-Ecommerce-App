import {ADD_ITEM, DELETE_ITEM, INC_QTY, DEC_QTY} from './Actions'

const initState={
    cart : [],
    count: 0,
    totalPrice: 0
}
const calculateTotalQuantity = (cartt) => {
    return cartt.reduce((total, item) => total + item.quantity, 0);
};
const calculateTotalPrice = (cartt) => {
    return cartt.reduce((total, item) => total + item.price*item.quantity, 0);
};


 const CartReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_ITEM:

        const existItemIndex= state.cart.findIndex(item=> item.id === action.payload.id)

        if(existItemIndex>-1){

        const UpdatedCart= state.cart.map((product,index)=>
                index === existItemIndex ?
                {...product, quantity: product.quantity + action.payload.quantity } : product
                )

            return{
                ...state,
                cart: UpdatedCart,
                count: calculateTotalQuantity(UpdatedCart),
                totalPrice: calculateTotalPrice(UpdatedCart)
            }
        }
    

        else
        return {
            ...state,
            cart: [...state.cart, action.payload],
                count: state.count+1,
                totalPrice:  state.totalPrice + action.payload.price
        }

        case INC_QTY:

        const existIndex= state.cart.findIndex(item=> item.id === action.payload)

        if(existIndex > -1){

        const UpdatedCart= state.cart.map((product, index)=>
                    index === existIndex ?
                    {...product, quantity : product.quantity+1 } : product
                )

            return {
                ...state,
                cart: UpdatedCart,
                count: calculateTotalQuantity(UpdatedCart),
                totalPrice: calculateTotalPrice(UpdatedCart)
            }
        }
        else return state
        
        case DEC_QTY:

        const existIndex1 = state.cart.findIndex(item=> item.id === action.payload)

        if(existIndex1 > -1){

            const UpdatedCart= state.cart.map((product, index)=>
                    index === existIndex1 ?
                    {...product, quantity : product.quantity>0 ? product.quantity-1: 0 } : product
                ).filter(product=> product.quantity > 0)

            return {
                ...state,
                cart: UpdatedCart,
                count: calculateTotalQuantity(UpdatedCart),
                totalPrice: calculateTotalPrice(UpdatedCart)
            }
        }
        else return state

        case DELETE_ITEM:

        const existIndex2 = state.cart.findIndex(item=> item.id === action.payload)

        if(existIndex2 > -1){

            const UpdatedCart= state.cart.map((product, index)=>
                    index === existIndex2 ?
                    {...product, quantity : product.quantity = 0} : product
                ).filter(product=> product.quantity > 0)

            return {
                ...state,
                cart: UpdatedCart,
                count: calculateTotalQuantity(UpdatedCart),
                totalPrice: calculateTotalPrice(UpdatedCart)
            }
        }
        break;

        default:
        return state
    }
}

export default CartReducer