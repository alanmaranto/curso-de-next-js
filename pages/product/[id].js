import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  console.log(useRouter())
  return <div>Id Producto: {id}</div>;
};

export default ProductItem;
