import { AxiosResponse } from "axios";
import $api from "src/Http";
import { Product, Shops } from "src/Store/Reducers/shopsReducer";

export type GetShopsResponse = { shopList: Shops[] };
export type GetProductsResponse = { productList: Product[] };

export default class ShopService {
  static async getShops(): Promise<AxiosResponse<GetShopsResponse>> {
    return $api.get<GetShopsResponse>("/");
  }
  static async getProducts(id: string): Promise<AxiosResponse<GetShopsResponse>> {
    return $api.get<GetShopsResponse>(`/${id}`);
  }
}
