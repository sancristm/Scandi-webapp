import express from "express";
const router = express.Router();
import {
  addProduct,
  deleteProductBySKU,
  getProducts,
  massDeleteProducts,
} from "../controllers/productsController.js";

router.route("/").get(getProducts);
router.route("/addProduct").post(addProduct);
router.route("/massDelete").delete(massDeleteProducts);
router.route("/deleteBySKU/:productSKU").delete(deleteProductBySKU);

//router.post('/',products)

export default router;
