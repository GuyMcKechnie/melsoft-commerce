import { createSlice } from '@reduxjs/toolkit';

// Each method stores minimal card info (never full PAN)
// id: unique string, brand (optional), cardholderName, last4, expiry (MM/YYYY), cvc(optional ephemeral)

const initialState = {
    methods: [],
    selectedMethodId: null,
    defaultMethodId: null,
};

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        addMethod: (state, action) => {
            const method = action.payload;
            state.methods.push(method);
            state.selectedMethodId = method.id;
            if (method.isDefault) {
                state.defaultMethodId = method.id;
            }
        },
        selectMethod: (state, action) => {
            state.selectedMethodId = action.payload;
        },
        setDefaultMethod: (state, action) => {
            state.defaultMethodId = action.payload;
        },
        removeMethod: (state, action) => {
            const id = action.payload;
            state.methods = state.methods.filter(m => m.id !== id);
            if (state.selectedMethodId === id) {
                state.selectedMethodId = state.methods[0]?.id || null;
            }
            if (state.defaultMethodId === id) {
                state.defaultMethodId = state.methods[0]?.id || null;
            }
        }
    }
});

export const { addMethod, selectMethod, setDefaultMethod, removeMethod } = paymentSlice.actions;
export default paymentSlice.reducer;