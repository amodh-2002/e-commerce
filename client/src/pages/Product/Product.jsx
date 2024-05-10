import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useFetch } from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

export const Product = () => {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  import.meta.env.REACT_APP_VITE_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt="firstImage"
                onClick={(e) => setSelectedImage("img")}
              />
              <img
                src={
                  import.meta.env.REACT_APP_VITE_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt="secondImage"
                onClick={(e) => setSelectedImage("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  import.meta.env.REACT_APP_VITE_UPLOAD_URL +
                  data?.attributes[selectedImage]?.data?.attributes?.url
                }
                alt="displayImage"
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={(e) =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={(e) => setQuantity((prev) => prev + 1)}>
                +
              </button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> Add to Cart
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon className="heart" /> Add to Wishlist
              </div>
              <div className="item">
                <BalanceIcon />
                Add to Compare
              </div>
            </div>
            <div className="info">
              <span>Vendor : Polo</span>
              <span>Product Type : T-Shirt</span>
              <span>Tag : T-Shirt,Women,Top</span>
            </div>
            <hr />
            <div className="details">
              <span>Description</span>
              <hr />
              <span>Additional Info</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
