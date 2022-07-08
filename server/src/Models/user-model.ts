import mongoose from "mongoose";
import { Schema } from "mongoose";

const bdUser = new Schema({
  email: { type: String, unique: true, required: true },
  price: { type: Number, required: true },
  shop_id: { type: String, required: true },
});

export default mongoose.model("UserModel", bdUser);
