import { Action, ThunkAction } from "@reduxjs/toolkit";
import ShopService from "src/Api/shop-api";
import { getProductAction, getShopsAction, ShopState } from "../Reducers/shopsReducer";
import { ThunkDispatch } from "@reduxjs/toolkit";

export type AppDispatch = ThunkDispatch<ShopState, any, any>;

export const shopThunk = (): ThunkAction<void, ShopState, unknown, Action> => async (dispatch) => {
  try {
    //dispatch({ type: loadingAction });
    const response = await ShopService.getShops();
    dispatch({ type: getShopsAction, payload: response.data });
  } catch (e) {
    console.log(e);
  }
};

export const productThunk =
  (id: string): ThunkAction<void, ShopState, unknown, Action> =>
  async (dispatch) => {
    try {
      //dispatch({ type: loadingAction });
      const response = await ShopService.getProducts(id);
      dispatch({ type: getProductAction, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
