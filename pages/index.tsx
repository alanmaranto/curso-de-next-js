import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

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
    <div>
      <Navbar />
      <h1>SuperMarket</h1>
      {productList.map((product) => (
        <>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </>
      ))}
    </div>
  );
};

export default Home;
