import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartData, ProductData } from "../types/all";

const initialState: CartData = {
    products: [],
    totalPrice: 0,
    totalAmount: 0,
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initialState,
    reducers: {
        changeProductAmountByID(state, action: PayloadAction<{ id: number, delta: number }>) {
            const product = state.products.find(({ id }) => id === action.payload.id);

            if (product) {
                const { delta } = action.payload;

                product.amount += delta;
                state.totalAmount += delta;
                state.totalPrice += product.price * delta;
            }
        },

        removeProductByID(state, action: PayloadAction<number>) {
            try {
                const removedProduct = state.products.splice(
                    state.products.findIndex(({ id }) => id === action.payload),
                    1
                )[0];

                state.totalAmount -= removedProduct.amount;
                state.totalPrice -= removedProduct.price * removedProduct.amount;

            } catch (e) {
                console.warn('removing product not found');
            }
        },

        getTotalPrice(state) {
            state.totalPrice;
        },

        getTotalAmount(state) {
            state.totalAmount;
        },

        updateProducts(state, action: PayloadAction<ProductData[]>) {
            return {
                products: action.payload,
                totalAmount: 0,
                totalPrice: 0,
            };
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const { updateProducts, getTotalAmount, getTotalPrice, changeProductAmountByID, removeProductByID } = cartSlice.actions;