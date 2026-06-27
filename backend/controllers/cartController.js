 
import User from "../models/User.js";
import Product from "../models/Product.js";

// GET Cart
export const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("cart.product");

    res.status(200).json({
      success: true,
      count: user.cart.length,
      data: user.cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ADD TO CART
export const addToCart = async (req, res) => {
  try {
    const { productId } = req.params;

    const user = await User.findById(req.user._id);

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    const existingItem = user.cart.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      user.cart.push({
        product: productId,
        quantity: 1,
      });
    }

    await user.save();

    await user.populate("cart.product");

    res.status(200).json({
      success: true,
      message: "Product added to cart.",
      data: user.cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// UPDATE CART QUANTITY
export const updateCartQuantity = async (req, res) => {
  try {

    const { productId } = req.params;

    const { action } = req.body;

    const user = await User.findById(req.user._id);

    const cartItem = user.cart.find(
      (item) => item.product.toString() === productId
    );

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found.",
      });
    }

    if (action === "increment") {
      cartItem.quantity += 1;
    }

    if (action === "decrement") {
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      }
    }

    await user.save();

    await user.populate("cart.product");

    res.status(200).json({
      success: true,
      message: "Cart updated.",
      data: user.cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// REMOVE FROM CART
export const removeFromCart = async (req, res) => {
  try {

    const { productId } = req.params;

    const user = await User.findById(req.user._id);

    user.cart = user.cart.filter(
      (item) => item.product.toString() !== productId
    );

    await user.save();

    await user.populate("cart.product");

    res.status(200).json({
      success: true,
      message: "Removed from cart.",
      data: user.cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
 
