import {ADD_TO_CART} from "./constant";

export const addToCart = ( data ) =>
{
    console.warn('action was called', data );
    return {
        type: ADD_TO_CART,
        data: 'hello'
    };
}
