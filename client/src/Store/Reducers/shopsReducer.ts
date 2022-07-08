import { createReducer, createAction } from "@reduxjs/toolkit";
import { GetShopsResponse, GetProductsResponse } from "src/Api/shop-api";

export type Shops = { _id: string; name: string };
export type Product = {
  _id: string;
  img_link: String;
  name: String;
  price: Number;
  shop_id: String;
};

export type ShopState = {
  shops: Shops[];
  product: Product[];
};

export const getShopsAction = createAction<GetShopsResponse>("GetShopsList");
export const getProductAction = createAction<GetProductsResponse>("GetProductsList");
//export const loadingAction = createAction("loadingAction");

const defaultState: ShopState = {
  shops: [],
  product: [],
};
export const shopsReducer = createReducer<ShopState>(defaultState, (builder) => {
  builder
    .addCase(getShopsAction, (state, action) => {
      console.log("getShopsAction", action.payload);
      state.shops = [...action.payload.shopList];
    })
    .addCase(getProductAction, (state, action) => {
      console.log("getProductAction", action.payload);
      state.product = [...action.payload.productList];
    });
  // .addCase(loadingAction, (state, action) => {});
});
