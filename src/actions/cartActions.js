import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from '../types/types';

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: {
      item,
      quantity: 1
    }
  }
}

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item
  }
}

export const updateCartItemQuantity = (item, quantity) => {
  return {
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: {
      item,
      quantity
    }
  }
}
