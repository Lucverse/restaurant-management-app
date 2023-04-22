import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from "../types/types";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload.item;
      const newQuantity = action.payload.quantity;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.item.name === newItem.name
      );
      if (existingItemIndex >= 0) {
        const existingItem = state.cartItems[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + newQuantity,
        };
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex] = updatedItem;
        return { ...state, cartItems: updatedCartItems };
      } else {
        const newCartItem = { item: newItem, quantity: newQuantity };
        return {
          ...state,
          cartItems: [...state.cartItems, newCartItem],
        };
      }
    case REMOVE_FROM_CART:
      const itemToRemove = action.payload;
      const filteredCartItems = state.cartItems.filter(
        (item) => item.item.name !== itemToRemove.name
      );
      return { ...state, cartItems: filteredCartItems };
    case UPDATE_CART_ITEM_QUANTITY:
      const itemToUpdate = action.payload.item;
      const updatedQuantity = action.payload.quantity;
      const itemIndexToUpdate = state.cartItems.findIndex(
        (item) => item.item.name === itemToUpdate.name
      );
      if (itemIndexToUpdate >= 0) {
        const itemToUpdate = state.cartItems[itemIndexToUpdate];
        const updatedItem = {
          ...itemToUpdate,
          quantity: updatedQuantity,
        };
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[itemIndexToUpdate] = updatedItem;
        return { ...state, cartItems: updatedCartItems };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default cartReducer;
