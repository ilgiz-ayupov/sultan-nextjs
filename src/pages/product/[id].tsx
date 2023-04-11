import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

import { ProductType } from "@/types";
import { getProduct } from "@/services/productsServices";

import { ProductDetail } from "@/components/ui";
import { BaseLayout } from "@/components/layout";

type Props = {
  product: ProductType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = parseInt(context.query.id as string, 10);
  const product = await getProduct(id);

  return {
    props: {
      product,
    },
  };
};

const ProductDetailPage: React.FC<Props> = ({ product }) => {
  console.log(product);

  if (!product.id) {
    return <h1>Продукт не найден !</h1>;
  }

  return (
    <BaseLayout>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content="Sultan e-shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <ProductDetail product={product} />
      </div>
    </BaseLayout>
  );
};

export default ProductDetailPage;
