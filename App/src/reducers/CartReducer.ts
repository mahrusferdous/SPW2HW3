import { cartState, CartActions } from "./CartState";

const CartReducer = (state: cartState, action: CartActions): cartState => {
    switch (action.type) {
        case "ADD_ITEM":
            return { ...state, Cart: [...state.Cart, action.payload] };
        case "REMOVE_ITEM":
            return { ...state, Cart: state.Cart.filter((item) => item.id != action.payload) };
        default:
            return state;
    }
};

export default CartReducer;
