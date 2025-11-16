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
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
