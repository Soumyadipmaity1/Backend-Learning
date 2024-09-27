import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});


const OderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },

    order: {
      type: [orderItemSchema],
      required: true,
    },
    shippingAddress: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "delivered", "cancelled"],
      default: "pending",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", OderSchema);
