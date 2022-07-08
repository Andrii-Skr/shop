import ShopsModel from "../Models/shop-model";
import ProductModel from "../Models/product-model";
//import { ApiError } from "../Exceptions/api-error";
//import { MyPayload } from "src/Store/types";

class DB {
  static async shopList() {
    const checkShop: any = await ShopsModel.find();

    if (!checkShop) {
      //throw ApiError.badRequest(`message: ${email} already used`);
      console.log("no shops...");
    }

    return checkShop;
  }
  static async productList(id: string) {
    console.log(id);
    const checkProduct: any = await ProductModel.find({ shop_id: id });

    if (!checkProduct) {
      //throw ApiError.badRequest(`message: ${email} already used`);
      console.log("no product...");
    }

    return checkProduct;
  }
  static async Opder(id: string) {
    const checkProduct: any = await ProductModel.findById(id);
    console.log(checkProduct);
    if (!checkProduct) {
      //throw ApiError.badRequest(`message: ${email} already used`);
      console.log("no product...");
    }

    return checkProduct;
  }
}

export default DB;
