import React from "react";

const ProductCard = ({ product, setSelectedProduct }) => {
  return (
    <div className="card p-3 m-2" style={{ width: "18rem" }}>
      <img
        src={product.images[0]}
        className="card-img-top"
        style={{ maxHeight: "300px", objectFit: "cover" }}
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <button
          className="btn btn-secondary mt-2"
          onClick={() => setSelectedProduct(product)}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
