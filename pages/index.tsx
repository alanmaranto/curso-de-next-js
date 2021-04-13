import React, { useEffect, useState } from "react";
import Layout from "@components/Layout/Layout";
import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";
import ProductList from "@components/ProductList/ProductList";

export const getServerSideProps = async (params) => {
  const response = await fetch("http://localhost:3000/api/avo");
  const { data }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList: data,
    },
  };
};

const Home = ({ productList }: { productList: TProduct[] }) => {
  const fetchProductList = async () => {};

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
