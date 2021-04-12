import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

const ProductItem = () => {
  const [product, setProduct] = useState<TProduct | null>(null);
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
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};

export default ProductItem;
