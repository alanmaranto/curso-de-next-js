import React, { useEffect, useState } from "react";
import Layout from "@components/Layout/Layout";
import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";
import ProductList from "@components/ProductList/ProductList";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  const fetchProductList = async () => {
    const response = await window.fetch("/api/avo");
    if (response.status === 200) {
      const products = await response.json();
      const { data, length } = products;
      setProductList(data);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default Home;
