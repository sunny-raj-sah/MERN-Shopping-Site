import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./config/db.js";
import Product from "./models/Product.js";
import products from "./seed/products.js";

dotenv.config();

const importData = async () => {
  try {
    // Connect Database
    await connectDB();

    // Delete Existing Products
    await Product.deleteMany();

    console.log("Old Products Deleted");

    // Insert New Products
    await Product.insertMany(products);

    console.log("Products Imported Successfully");

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

importData();