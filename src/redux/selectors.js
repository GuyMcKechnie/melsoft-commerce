import { createSelector } from '@reduxjs/toolkit';

export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalQty = createSelector(selectCartItems, (items) =>
    items.reduce((sum, item) => sum + (item.quantity || 0), 0)
);

export const selectCartTotalPrice = createSelector(selectCartItems, (items) =>
    items.reduce((sum, item) => sum + (Number(item.price) * (item.quantity || 0)), 0)
);
