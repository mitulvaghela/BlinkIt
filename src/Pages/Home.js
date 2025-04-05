import ProductCard from "../Components/ProductCard";

const Home = ({ productsList = [], ...restProps }) => {
  return (
    <div className="home-page">
      <div className="header-name">Home Page</div>
      <div className="product-list">
        {productsList?.map((product) => (
          <ProductCard key={product.id} product={product} {...restProps} />
        ))}
      </div>
    </div>
  );
};

export default Home;
