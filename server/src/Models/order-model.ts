import mongoose from "mongoose";
import { Schema } from "mongoose";

const bdOrder = new Schema({
  product_id: { type: String, required: true },
  quantity: { type: Number, required: true },
  user_id: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  isCancel: { type: Boolean, default: false },
  createDate: { type: Date },
});

export default mongoose.model("OrderModel", bdOrder);
