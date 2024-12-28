import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, price, id }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <Link to={`/product/${id}`}>{title}</Link>
      <h4>{price} $</h4>
    </div>
  );
};

export default Card;
