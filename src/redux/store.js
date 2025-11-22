import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import paymentReducer from './paymentSlice';
import addressReducer from './addressSlice';
import uiReducer from './uiSlice';

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
    address: addressReducer,
    ui: uiReducer,
  },
  preloadedState: {
    cart: loadKey('cart') || { items: [] },
    payment: loadKey('payment') || { methods: [], selectedMethodId: null, defaultMethodId: null },
    address: loadKey('address') || { addresses: [], selectedAddressId: null, defaultAddressId: null },
    ui: { sidebarOpen: true },
  },
});

// Persist select slices
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart));
    localStorage.setItem('payment', JSON.stringify(state.payment));
    localStorage.setItem('address', JSON.stringify(state.address));
  } catch { }
});

export { store };