import React from "react";

const product = () => {
  return (
    <div>
      <div className="product-card__body">
        <div className="product-card__details">
          <div className="product-card__sku"> {product.sku}</div>
          <div className="product-card__name">{product.name}</div>
          <div className="product-card__price">Price: ${product.price} </div>
          {attributeValue !== undefined && attributeValue !== null && (
            <div className="product-card__attribute">
              <p>
                {attributeType}: {attributeValue}
              </p>
            </div>
          )}
          {product.type === "BOOK" && product.weight && (
            <div className="product-card__attribute">
              <p>weight: {product.weight} KG</p>
            </div>
          )}

          {product.type === "DVD" && product.size && (
            <div className="product-card__attribute">
              <p>Size: {product.size}MB</p>
            </div>
          )}
          {product.type === "FURNITURE" && product.dimensions && (
            <div className="product-card__attribute">
              <p>
                Dimensions: {product.dimensions.height} x{" "}
                {product.dimensions.width} x {product.dimensions.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default product;
