import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import Layout from "@components/Layout/Layout";
import ProductSummary from "@components/ProductSummary/ProductSummary";

// Dynamic page
// next js needs to knows in build time the id and that only with the static paths
export const getStaticPaths: GetStaticPaths = async () => {
  // const response = await fetch("http://localhost:3000/api/avo");
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data }: TAPIAvoResponse = await response.json();

  const paths = data.map(({ id }) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    // incremental static generation
    // If we don't specify or include any page in paths will return 404
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const id = params?.id as string;
  // const response = await fetch(`http://localhost:3000/api/avo/${params?.id}`);
  const response = await fetch(
    `https://platzi-avo.vercel.app/api/avo/${params?.id}`
  );
  const data: { data: TProduct } = await response.json();

  return {
    props: {
      product: data,
    },
  };
};

const ProductItem = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};

export default ProductItem;
