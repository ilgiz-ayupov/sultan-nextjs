import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

import { CategoryType, ProductType } from "@/types";

import { PageTitle } from "@/components/atoms";
import { BaseLayout } from "@/components/layout";
import { getCategory } from "@/services/categoriesServices";
import { getProductsByCategory } from "@/services/productsServices";

type Props = {
  category: CategoryType;
  products: ProductType[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;

  let category: CategoryType | undefined;
  let products: ProductType[] = [];

  if (slug) {
    category = await getCategory(slug as string);
    if (category?.id) {
      products = await getProductsByCategory(category.id);
    }
  }

  return {
    props: {
      category,
      products,
    },
  };
};

const CatalogDetail: React.FC<Props> = ({ category, products }) => {
  if (!category) {
    return <h1>Категория не найдена !</h1>;
  }

  return (
    <BaseLayout>
      <Head>
        <title>Sultan - {category.name}</title>
        <meta name="description" content="Sultan e-shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <PageTitle>{category.name}</PageTitle>
        </div>
      </main>
    </BaseLayout>
  );
};

export default CatalogDetail;
