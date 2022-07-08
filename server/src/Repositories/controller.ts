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
      const { id } = req.params;
      const product = await await BD.productList(id);
      return res.json({ productList: product });
    } catch (error) {}
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
    } catch (error) {}
  }
}

export default Controller;
