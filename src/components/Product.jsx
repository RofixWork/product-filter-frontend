import React from "react";
import { FaStar } from "react-icons/fa";

const Product = ({ image, title, description, price, rating, category }) => {
  return (
    <div className="col-12 col-md-6 mb-3">
      <div className="card">
        <div style={{ height: 200 }}>
          <img
            src={image}
            className="object-fit-cover w-100 h-100"
            alt={title}
            loading="lazy"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-capitalize">{title}</h5>
          <span class="badge text-bg-primary">{category}</span>

          <p className="mt-2 card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <h3>${price}</h3>
            <h5>
              {rating}
              <FaStar fontSize={16} color="orange" className="ms-1" />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
