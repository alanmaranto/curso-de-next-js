import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const [product, setProduct] = useState<TProduct>();
  const {
    query: { id },
  } = useRouter();

  const fetchProduct = async () => {
    if (id) {
      const response = await window.fetch(`/api/avo/${id}`);
      if (response.status === 200) {
        const product = await response.json();
        setProduct(product);
      }
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <>
      <div>Id Producto: {id}</div>
      <div>Nombre: {product?.name}</div>
    </>
  );
};

export default ProductItem;
