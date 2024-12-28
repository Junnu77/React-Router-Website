import React, { Profiler, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";

const SingleProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const getData = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };

  const isEmpty = (obj) => Object.keys(obj).length === 0;

  useEffect(() => {
    getData(params.id);
  }, [product]);

  if (!product || isEmpty(product)) {
    return <Loading />;
  }
  console.log(product);

  return (
    <div className="single-product">
      <div className="product-page-image-part">
        <img
          src={product.image}
          alt="Product Image"
          className="product-image"
        />
      </div>
      <div className="product-page-info">
        <p>Category : {product.category}</p>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h2>{product.price} $</h2>
        <p>
          Rating: {product.rating.rate} {product.rating.count} counts
        </p>
        <button className="btn btn-danger">Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
