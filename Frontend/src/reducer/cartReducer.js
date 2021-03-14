import { zalgo } from 'colors';
import { ADD_CART_ITEM, REMOVE_CART_ITEM } from '../constants/cartConstant';

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CART_ITEM:
      const existItem = state.cartItems.find(
        (x) => x.product === payload.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? payload : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
        };
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== payload),
      };

    default:
      return state;
  }
};
