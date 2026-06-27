import User from "../models/User.js";
import Product from "../models/Product.js";

// GET Wishlist
export const getWishlist = async (req, res) => {
  try {

    const user = await User.findById(req.user._id)
      .populate("wishlist");

    res.status(200).json({
      success: true,
      count: user.wishlist.length,
      data: user.wishlist,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ADD To Wishlist
export const addToWishlist = async (req, res) => {
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

    const alreadyExists = user.wishlist.includes(productId);

    if (alreadyExists) {
      return res.status(400).json({
        success: false,
        message: "Product already in wishlist.",
      });
    }

    user.wishlist.push(productId);

    await user.save();

    await user.populate("wishlist");

    res.status(200).json({
      success: true,
      message: "Added to wishlist.",
      data: user.wishlist,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// REMOVE Wishlist
export const removeFromWishlist = async (req, res) => {
  try {

    const { productId } = req.params;

    const user = await User.findById(req.user._id);

    user.wishlist = user.wishlist.filter(
      (item) => item.toString() !== productId
    );

    await user.save();

    await user.populate("wishlist");

    res.status(200).json({
      success: true,
      message: "Removed from wishlist.",
      data: user.wishlist,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};