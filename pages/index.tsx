import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "@components/Layout/Layout";
import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";
import ProductList from "@components/ProductList/ProductList";

export const getStaticProps: GetStaticProps = async () => {
  // static page
  // const response = await fetch("http://localhost:3000/api/avo");
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList: data,
    },
  };
};

const Home = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <section>
        <Link href="/yes-or-no">
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </section>
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
