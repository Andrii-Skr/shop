import mongoose from "mongoose";
import { Schema } from "mongoose";

const bdShop = new Schema({
  name: { type: String, required: true },
});

export default mongoose.model("ShopModel", bdShop);
