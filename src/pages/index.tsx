import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

import type { CategoryType, ProductType } from "@/types";
import { getCategories } from "@/services/categoriesServices";
import { getProducts } from "@/services/productsServices";

import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDesc,
} from "@/components/atoms";
import { HeroSection, CategoriesMenu, ProductsMenu } from "@/components/ui";
import { BaseLayout } from "@/components/layout";

type Props = {
  categories: CategoryType[];
  products: ProductType[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categories = await getCategories();
  const products = await getProducts(4);

  return {
    props: { categories, products },
  };
};

const Home: React.FC<Props> = ({ categories, products }) => {
  return (
    <BaseLayout>
      <Head>
        <title>Sultan - Главная</title>
        <meta name="description" content="Sultan e-shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection id="hero" />

        <Section id="products">
          <div className="container">
            <SectionHeader>
              <SectionTitle>
                <span className="accent">Акционные</span> товары
              </SectionTitle>
            </SectionHeader>

            <ProductsMenu products={products} />
          </div>
        </Section>

        <Section id="categories">
          <div className="container">
            <SectionHeader>
              <SectionTitle>
                <span className="accent">категории</span> товаров
              </SectionTitle>
              <SectionDesc>
                10 000+ ходовых позиций по спецмальным ценам
              </SectionDesc>
            </SectionHeader>

            <CategoriesMenu categories={categories} />
          </div>
        </Section>
      </main>
    </BaseLayout>
  );
};

export default Home;
