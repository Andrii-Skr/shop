import { Request, Response } from "express";
import BD from "../Service/workWithDb";

class Controller {
  static async shopList(req: Request, res: Response) {
    try {
      const shops = await BD.shopList();
      return res.json({ shopList: shops });
    } catch (error) {
      console.log(error);
    }
  }
  static async productPriceList(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await await BD.productList(id);
      return res.json({ productList: product });
    } catch (error) {}
  }
  static async postOrder(req: Request, res: Response) {
    try {
      await BD.postOrder(req.body.order, req.body.user);
      return res.json({ message: "Done" });
    } catch (error) {
      console.log(error, "postorder");
    }
  }
  static async user(req: Request, res: Response) {
    try {
    } catch (error) {}
  }
  static async getOrder(req: Request, res: Response) {
    try {
    } catch (error) {}
  }
  static async cancelOrder(req: Request, res: Response) {
    try {
      await BD.cancelOrder(req.body.order, req.body.user);
      return res.json({ message: "Done" });
    } catch (error) {}
  }
  static async postProductPriceList(req: Request, res: Response) {
    try {
      console.log(req.body);
      await BD.postProduct(req.body);
      return res.json({ message: "Done" });
    } catch (error) {
      console.log(error, "postProduct");
    }
  }
}

export default Controller;
