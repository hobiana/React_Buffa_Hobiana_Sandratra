import { ADD_TO_CART,REMOVE_ITEM,ADD_QUANTITY,SUB_QUANTITY} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}


export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const subQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}