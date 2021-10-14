import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import Layout from "@components/Layout/Layout";
import ProductSummary from "@components/ProductSummary/ProductSummary";

// Dynamic page
// next js needs to knows in build time the id and that only with the static paths
export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/avo");
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
  const id = params?.id as string;
  const response = await fetch(`http://localhost:3000/api/avo/${id}`);
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
