import User from "../models/User.js";
import Order from "../models/Order.js";

// PLACE ORDER
export const placeOrder = async (req, res) => {
  try {
    const { addressId } = req.body;

    const user = await User.findById(req.user._id).populate("cart.product");

    if (user.cart.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty.",
      });
    }

    const address = user.addresses.id(addressId);

    if (!address) {
      return res.status(404).json({
        success: false,
        message: "Address not found.",
      });
    }

    const items = user.cart.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
      price: item.product.price,
    }));

    const totalItems = user.cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const totalPrice = user.cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    const order = await Order.create({
      user: user._id,
      items,
      shippingAddress: address.toObject(),
      totalItems,
      totalPrice,
    });

    // Empty Cart
    user.cart = [];

    await user.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully.",
      data: order,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// GET MY ORDERS
export const getOrders = async (req, res) => {
  try {

    const orders = await Order.find({
      user: req.user._id,
    })
      .populate("items.product")
      .sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};