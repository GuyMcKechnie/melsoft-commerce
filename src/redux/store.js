import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import paymentReducer from './paymentSlice';

// Generic loader
const loadKey = (key) => {
  try {
    const serialized = localStorage.getItem(key);
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    payment: paymentReducer,
  },
  preloadedState: {
    cart: loadKey('cart') || { items: [] },
    payment: loadKey('payment') || { methods: [], selectedMethodId: null, defaultMethodId: null },
  },
});

// Persist select slices
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart));
    localStorage.setItem('payment', JSON.stringify(state.payment));
  } catch { }
});

export { store };