import { configureStore } from "@reduxjs/toolkit";
import { shopsReducer, ShopState } from "./Reducers/shopsReducer";

export const selectShops = (state: { shops: ShopState }) => state.shops.shops;
export const selectProducts = (state: { shops: ShopState }) => state.shops.product;

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
  },
});
