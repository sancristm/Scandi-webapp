import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAddProductMutation } from "../slices/productApiSlice";
import { setProduct } from "../slices/productSlice";

function AddProduct({ onAdd, children }) {
  const [SKU, setSku] = useState("");
  const [Name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productType, setProductType] = useState("DVD");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [dimensions, setDimensions] = useState({
    height: "",
    width: "",
    length: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addProduct, { isLoading }] = useAddProductMutation();
  const { productDetails } = useSelector((state) => state.prod);

  useEffect(() => {
    if (productDetails) {
      navigate("/");
    }
  }, [navigate, productDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addProduct().unwrap();
      dispatch(setProduct({ ...res }));
      navigate("/");
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }

    // if (!SKU) {
    //   alert("Please add a product");
    //   return;
    // }

    // setSku("");
    // setName("");
    // setPrice("");
    // setProductType("DVD");
    // setSize("");
    // setWeight("");
    // setHeight("");
    // setWidth("");
    // setLength("");
    // setDimensions({ height: "", width: "", length: "" });

    // reset the form
    event.target.reset();
  };

  return (
    <div className="container">
      <form id="product_form" onSubmit={handleSubmit}>
        <div className="form-control">
          <div>
            <label htmlFor="sku">SKU:</label>
            <input
              type="text"
              id="sku"
              name="sku"
              value={SKU}
              required
              onChange={(event) => setSku(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={Name}
              required
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              required
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="productType">Product Type:</label>
            <select
              id="productType"
              name="productType"
              value={productType}
              onChange={(event) => setProductType(event.target.value)}
            >
              <option value="DVD">DVD</option>
              <option value="BOOK">Book</option>
              <option value="FURNITURE">Furniture</option>
            </select>
          </div>
          {productType === "DVD" && (
            <div>
              <label htmlFor="size">Size (MB):</label>
              <input
                type="number"
                id="size"
                name="size"
                value={size}
                required
                onChange={(event) => setSize(event.target.value)}
              />
            </div>
          )}
          {productType === "BOOK" && (
            <div>
              <label htmlFor="weight">Weight (Kg):</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={weight}
                required
                onChange={(event) => setWeight(event.target.value)}
              />
            </div>
          )}
          {productType === "FURNITURE" && (
            <div>
              <label htmlFor="height">Height (cm):</label>
              <input
                type="number"
                id="height"
                name="height"
                value={height}
                required
                onChange={(event) => setHeight(event.target.value)}
              />
              <label htmlFor="width">Width (cm):</label>
              <input
                type="number"
                id="width"
                name="width"
                required
                value={width}
                onChange={(event) => setWidth(event.target.value)}
              />

              <label htmlFor="length">Length (cm):</label>
              <input
                type="number"
                id="length"
                name="length"
                required
                value={length}
                onChange={(event) => setLength(event.target.value)}
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
export default AddProduct;
