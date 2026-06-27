import User from "../models/User.js";

// GET ALL ADDRESSES
export const getAddresses = async (req, res) => {
  try {

    const user = await User.findById(req.user._id);

    res.status(200).json({
      success: true,
      count: user.addresses.length,
      data: user.addresses,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ADD ADDRESS
export const addAddress = async (req, res) => {
  try {

    const {
      name,
      phone,
      street,
      city,
      state,
      country,
      pincode,
    } = req.body;

    const user = await User.findById(req.user._id);

    user.addresses.push({
      name,
      phone,
      street,
      city,
      state,
      country,
      pincode,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Address added successfully.",
      data: user.addresses,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// UPDATE ADDRESS
export const updateAddress = async (req, res) => {
  try {

    const { addressId } = req.params;

    const user = await User.findById(req.user._id);

    const address = user.addresses.id(addressId);

    if (!address) {
      return res.status(404).json({
        success: false,
        message: "Address not found.",
      });
    }

    address.name = req.body.name || address.name;
    address.phone = req.body.phone || address.phone;
    address.street = req.body.street || address.street;
    address.city = req.body.city || address.city;
    address.state = req.body.state || address.state;
    address.country = req.body.country || address.country;
    address.pincode = req.body.pincode || address.pincode;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Address updated successfully.",
      data: user.addresses,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// DELETE ADDRESS
export const deleteAddress = async (req, res) => {
  try {

    const { addressId } = req.params;

    const user = await User.findById(req.user._id);

    user.addresses.pull(addressId);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Address removed successfully.",
      data: user.addresses,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};