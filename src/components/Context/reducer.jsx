// Tao cac gia tri khoi tao ban dau cho cac ham

export const actionNew = {
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionNew.SET_CART_SHOW: // trang thai show cart ban dau
      return {
        ...state,
        cartShow: action.cartShow,
      };

    case actionNew.SET_CART_ITEMS: // trang thai show cart item ban dau
      return {
        ...state,
        cartItems: action.cartItems,
      };

    default:
      return state;
  }
};
export default reducer;
