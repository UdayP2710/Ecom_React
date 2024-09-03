import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const Initial_CART = { cart: [] };
export const addCartApiCall = createAsyncThunk(
  "cart/add",
  async (arg, thunkApi) => {
    await fetch("https://my-json-server.typicode.com/UdayP2710/fake_store/db", {
      method: "PUT",
    });

    thunkApi.dispatch(cartActions.addProduct(arg));
  }
);

export const removeCartApiRequest = createAsyncThunk(
  "cart/delete",
  async (arg, thunkApi) => {
    await fetch("https://my-json-server.typicode.com/UdayP2710/fake_store/db", {
      method: "DELETE",
    });

    thunkApi.dispatch(cartActions.removeProduct(arg));
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState: Initial_CART,
  reducers: {
    addProduct: (state, actions) => {
      state.cart.push(actions.payload);
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const cartState = (state) => state.cartReducer;
