import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: []
};

export const cartSlice = createSlice({
	name: "cartItem",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cart.push(action.payload)
		},
		removeFromCart: (state, action) => {
			state.cart.splice(action.payload, 1);
		},
		increaseQuantity: (state, action) => {
			state.cart[action.payload].quantity += 1
		},
		decreaseQuantity: (state, action) => {
			if (state.cart[action.payload].quantity <= 1) {
				state.cart.splice(action.payload, 1)
			} else {
				state.cart[action.payload].quantity -= 1
			}
		}
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
