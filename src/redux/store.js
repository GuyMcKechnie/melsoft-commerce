import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Load cart from localStorage
const loadCart = () => {
  try {
    const serialized = localStorage.getItem('cart');
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadCart() || { items: [] },
  },
});

// Save cart to localStorage on state change
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart));
  } catch { }
});

export { store };