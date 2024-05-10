import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              import.meta.env.REACT_APP_VITE_UPLOAD_URL +
              item.attributes.img.data.attributes.url
            }
            alt="mainImage"
            className="mainImg"
          />
          <img
            src={
              import.meta.env.REACT_APP_VITE_UPLOAD_URL +
              item.attributes.img2.data.attributes.url
            }
            alt="secondImage"
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item?.attributes.oldPrice}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};
