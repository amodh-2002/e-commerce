import React from "react";
import { useFetch } from "../../Hooks/useFetch";
import { Card } from "../Card/Card";
import "./List.scss";

export const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eqi]=${item}`
    )}&[filters][newPrice][$lt]=${maxPrice}&sort=newPrice:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};
