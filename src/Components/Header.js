const Header = ({
  selectedProduct,
  setSelectedProduct,
  showCart,
  setShowCart,
  cartItems,
}) => {
    const toggleDrawer = () => {
        setShowCart(!showCart);
    }
  return (
    <div className="header">
       {selectedProduct && (
        <button
          className="back-btn"
          onClick={() => setSelectedProduct(null)}
        >{` Back`}</button>
      )}
      
        <h1> Blink It </h1>
     
        <button
          className="cart-btn"
          onClick={toggleDrawer}
        >{`Cart (${cartItems.length})`}</button>
      
    </div>
  );
};

export default Header;
