import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// Add a product
// Route: POST /api/products/addAproduct
// Access: Public
const addProduct = asyncHandler(async (req, res) => {
  const { SKU, name, price, size, weight, Height, Width, Length } = req.body;

  //const {  } = dimensions;

  try {
    // Check if the product already exists
    const productExists = await Product.findOne({ SKU });

    if (productExists) {
      res.status(400);
      throw new Error("Product already exists");
    }

    // Create a new product
    const product = await Product.create({
      SKU,
      name,
      price,
      size,
      weight,
      Height,
      Width,
      Length,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a list of products
// Route: GET /api/products
// Access: Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Mass delete route (You can implement this if needed)
const massDeleteProducts = asyncHandler(async (req, res) => {
  const { sku } = req.body;

  //  console.log(sku) //for debbuging

  if (!sku || !Array.isArray(sku) || sku.length === 0) {
    return res.status(400).json({ error: "Invalid product sku provided" });
  }

  try {
    // Use the $in operator to delete products with matching IDs
    const result = await Product.deleteMany({ SKU: { $in: sku } });

    if (result.deletedCount > 0) {
      res.status(200).json({ message: "Products deleted successfully" });
    } else {
      res.status(404).json({ error: "No matching products found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to delete products" });
  }
});

// Delete a single product by ID
// Route: DELETE /api/products/:productId
// Access: Public (You can adjust the access level as needed)
const deleteProductBySKU = asyncHandler(async (req, res) => {
  const skuToDelete = req.params.productSKU; // Get SKU from URL
  console.log(skuToDelete);

  try {
    const deletedProduct = await Product.findOneAndDelete({
      //SKU: { $regex: new RegExp(skuToDelete, 'i') },
      SKU: { skuToDelete },
    });

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res
      .status(200)
      .json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    res.status(500).json({ error: "Unable to delete product" });
  }
});

export { addProduct, getProducts, massDeleteProducts, deleteProductBySKU };
