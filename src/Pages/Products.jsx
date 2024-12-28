import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import Card from "../Components/Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (products.length === 0) {
      setIsLoading(true);
      getData();
    }
  }, [products]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="products-page">
      <span className="my-4 w-100 d-flex flex-column align-items-center justify-content-center">
        <h2>Hello User..</h2>
        <h3>Our Products</h3>
      </span>
      <div className="card-section">
        {products.map((product) => {
          return (
            <Card
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
