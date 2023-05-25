import {fetchCart} from "../Main/utils/fetchLocalStorageData"
import { menuList } from "../Main/utils/data";

const cartInfo = fetchCart() 

export const initialState = {
    fooditems: null,
    cartShow: false,
    cartItems: cartInfo,
};
