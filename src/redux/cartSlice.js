import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // { id, name, price, quantity }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existing = state.items.find(i => i.id === item.id);
            if (existing) {
                existing.quantity += item.quantity;
            } else {
                state.items.push({ ...item });
            }
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
