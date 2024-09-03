import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { product: [] };
//...................function for fetching data from serrver.................//
export const fetchProduct = createAsyncThunk(
  "product/fetchproduct",
  async (arg, thunkApi) => {
    console.log("inside fetch product");
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    console.log(data);

    thunkApi.dispatch(productActions.setInitial(data));
  }
);
//...............function for adding data to the server......................//
export const editApiRequest = createAsyncThunk(
  "product/edit",
  async (arg, thunkApi) => {
    await fetch("https://my-json-server.typicode.com/UdayP2710/fake_store/db", {
      method: "PATCH",
    });

    thunkApi.dispatch(productActions.editProduct(arg));
  }
);
//................function to delete data from serevr.....................//
export const deleteApiRequest = createAsyncThunk(
  "product/delete",
  async (arg, thunkApi) => {
    await fetch("https://my-json-server.typicode.com/UdayP2710/fake_store/db", {
      method: "DELETE",
    });

    thunkApi.dispatch(productActions.removeProduct(arg));
  }
);
//.............function to add product into database...............//
export const addProductToDbRequest = createAsyncThunk(
  "product/add",
  async (arg, thunkApi) => {
    await fetch("https://my-json-server.typicode.com/UdayP2710/fake_store/db");
    thunkApi.dispatch(productActions.addNewProduct(arg));
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: INITIAL_STATE,
  reducers: {
    setInitial: (state, action) => {
      state.product = action.payload;
    },
    editProduct: (state, action) => {
      const index = state.product.findIndex(
        (pro) => pro.id === action.payload.id
      );

      state.product.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.price = action.payload.price;
          item.description = action.payload.description;
        }
      });
    },
    removeProduct: (state, action) => {
      console.log("delete");
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },
    addNewProduct: (state, action) => {
      state.product.push(action.payload);
    },
  },
});
export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
export const productState = (state) => state.productReducer;
//https://fakestoreapi.com/products/
//https://my-json-server.typicode.com/UdayP2710/fake_store
