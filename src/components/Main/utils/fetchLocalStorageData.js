import secureLocalStorage from "react-secure-storage";

export const fetchCart = () => {
  const cartInfo =
    secureLocalStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(secureLocalStorage.getItem("cartItems"))
      : secureLocalStorage.clear();
  return cartInfo ? cartInfo : [];
};
