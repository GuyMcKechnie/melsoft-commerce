import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        addresses: [],
        selectedAddressId: null,
        defaultAddressId: null,
    },
    reducers: {
        addAddress: (state, action) => {
            const newAddress = {
                ...action.payload,
                id: Date.now().toString(),
            };
            state.addresses.push(newAddress);

            // If this is the first address or marked as default, set it as default
            if (state.addresses.length === 1 || action.payload.isDefault) {
                state.defaultAddressId = newAddress.id;
                state.selectedAddressId = newAddress.id;
            }

            // If marked as default, update other addresses
            if (action.payload.isDefault) {
                state.addresses.forEach(addr => {
                    if (addr.id !== newAddress.id) {
                        addr.isDefault = false;
                    }
                });
            }
        },
        selectAddress: (state, action) => {
            state.selectedAddressId = action.payload;
        },
        setDefaultAddress: (state, action) => {
            state.defaultAddressId = action.payload;
            state.selectedAddressId = action.payload;

            // Update isDefault flag on all addresses
            state.addresses.forEach(addr => {
                addr.isDefault = addr.id === action.payload;
            });
        },
        removeAddress: (state, action) => {
            state.addresses = state.addresses.filter(addr => addr.id !== action.payload);

            // If the removed address was selected or default, clear those
            if (state.selectedAddressId === action.payload) {
                state.selectedAddressId = state.addresses.length > 0 ? state.addresses[0].id : null;
            }
            if (state.defaultAddressId === action.payload) {
                state.defaultAddressId = state.addresses.length > 0 ? state.addresses[0].id : null;
            }
        },
    },
});

export const { addAddress, selectAddress, setDefaultAddress, removeAddress } = addressSlice.actions;
export default addressSlice.reducer;
