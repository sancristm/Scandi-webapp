import React from "react";

import "./App.css";

import { Outlet } from "react-router-dom";

const App = () => {
  //const [products, setProducts] = useState([]);
  // const handleAddProduct = (product) => {

  //   let newProduct = product;

  //   const updatedProducts = [...products, newProduct];
  //   setProducts(updatedProducts);
  //   setShowAddProduct(false);
  //    console.log(updatedProducts)
  // };
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
