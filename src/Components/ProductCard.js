import React from "react";
import { getItemInCart } from "../helpers/cartUtils";

const ProductCard = ({
  product,
  cartList,
  handleAddToCart,
  setSelectedProduct,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  isDetailsOpen= false,
}) => {
  const cartItem= getItemInCart(cartList, product);
  console.log(cartItem);
  return (
    <div key={product.id} className="product-card">
      <h4>{product.name}</h4>
      <img src={product.image} alt={product.name} />
      <p>Price: {product.price}</p>
      {!cartItem ? (
        <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
      ) : (
        <div className="qty-control">
          <button onClick={() => handleDecreaseQuantity(product.id)}> - </button>
          <div>{cartItem.quantity}</div>
          <button onClick={() => handleIncreaseQuantity(product.id)}> + </button>
        </div>
      )}
      {isDetailsOpen &&<p className="description">{product?.description} </p>}
      {!isDetailsOpen && <button onClick={() => setSelectedProduct(product)}> View Details</button>}
    </div>
  );
};

export default ProductCard;
