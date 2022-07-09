import ShopsModel from "../Models/shop-model";
import ProductModel from "../Models/product-model";
import OrderModel from "../Models/order-model";
import UserModel from "../Models/user-model";

class DB {
  static async shopList() {
    const checkShop: any = await ShopsModel.find();

    if (!checkShop) {
      console.log("no shops...");
    }

    return checkShop;
  }
  static async productList(id: string) {
    console.log(id);
    const checkProduct: any = await ProductModel.find({ shop_id: id });

    if (!checkProduct) {
      console.log("no product...");
    }

    return checkProduct;
  }
  static async postOrder(reqOrder: any, reqUser: any) {
    UserModel.create({ ...reqUser });
    const userId = UserModel.findOne({ email: reqUser.email });
    const order = OrderModel.create({ ...reqOrder, user_id: userId });
    return order;
  }
  static async postProduct(reqProduct: any) {
    const product = ProductModel.create({ ...reqProduct });
    return product;
  }
  static async cancelOrder(reqOrder: any, reqUser: any) {
    const order = OrderModel.findByIdAndUpdate(reqOrder._id, { ...reqOrder });
    return order;
  }
}

export default DB;
