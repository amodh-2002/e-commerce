import React from "react";
import { useFetch } from "../../Hooks/useFetch";
import { Card } from "../Card/Card";
import "./FeaturedProducts.scss";

export const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[Type][$eqi]=${type}`
  );
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type}Products</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};
