import mongoose from "mongoose";
import { Schema } from "mongoose";

const bdOrder = new Schema({
  product_id: { type: String, required: true },
  quantity: { type: Number, required: true },
  user_id: { type: Number, required: true },
});

export default mongoose.model("OrderModel", bdOrder);
