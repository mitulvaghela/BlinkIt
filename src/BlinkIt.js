import React, { useState, useEffect } from "react";

import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import CartDrawer from "./Pages/CartDrawer";

import { fetchProducts } from "./api/productsApi";
import Header from "./Components/Header";
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from "./helpers/cartUtils";

import "./styles/BlinkitApp.css";

const BlinkIt = () => {
  const [productsList, setProductsList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
 
  const handleAddToCart = (product) => {
    setCart( (prev) => {
         return addToCart(prev,product);
    })
  };

  const handleIncreaseQuantity = (id) => {
    setCart( (prev) => {
         return increaseQuantity(prev,id);
    })
  };

  const handleDecreaseQuantity = (id) => {  
    setCart( (prev) => {
         return decreaseQuantity(prev,id);

          })
  };

  const handleRemoveFromCart = (id) => {
    setCart( (prev) => {
         return removeFromCart(prev,id);
    })
  };

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      console.log(data);
      setProductsList(data);
    };
    loadProducts();
  }, []);

  useEffect ( () => {
      if(showCart)
        document.body.style.overflow = "hidden";
      else
        document.body.style.overflow = "auto";
      return () => {
        document.body.style.overflow = "auto";
      }
  }, [ showCart]);

  return (
    <>
    <div className="container">
      <Header
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        showCart={showCart}
        setShowCart={setShowCart}
        cartItems={cart}
      />
      {!selectedProduct && (
        <Home
          productsList={productsList}
          setSelectedProduct={setSelectedProduct}
          handleAddToCart={handleAddToCart}
          cartList={cart}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
        />
      )}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          productsList={productsList}
          handleAddToCart={handleAddToCart}
          cartList={cart}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
        />
      )}
      {showCart &&(
        <CartDrawer
          setShowCart={setShowCart}
          cart={cart}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      )}
      </div>
    </>
  );
};

export default BlinkIt;
