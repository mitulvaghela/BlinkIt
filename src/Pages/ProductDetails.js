import React from "react";
import ProductCard from "../Components/ProductCard";

const ProductDetails = ({ product, ...restProps }) => {
  return (
    <>
      <h1>Product Details</h1>
      <div className="product-detail">
        <ProductCard  product={product} {...restProps} isDetailsOpen={true} /> 
      </div>
    </>
  );
};

export default ProductDetails;
