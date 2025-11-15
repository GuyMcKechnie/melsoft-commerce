import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // { id, name, price, quantity }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // ...existing code...
        },
        removeFromCart: (state, action) => {
            // ...existing code...
        },
        clearCart: (state) => {
            state.items = [];
        },
        updateQuantity: (state, action) => {
            // ...existing code...
        },
    },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
