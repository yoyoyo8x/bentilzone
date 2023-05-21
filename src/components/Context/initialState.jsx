import {fetchCart} from "../Main/utils/fetchLocalStorageData"

const cartInfo = fetchCart() 

export const initialState = {
    fooditems: null,
    cartShow: false,
    cartItems: cartInfo,
};
