"use client";
import CategoryList from "@/app/components/CategoryList";
import IndexPage from "@/app/components/IndexPage";
import ProductsItem from "@/app/components/ProductsItem";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  const { product } = useParams();
  return (
    <>
      <CategoryList
        landingPage={<ProductsItem></ProductsItem>}
        landingCategory={product}
      ></CategoryList>
    </>
  );
}

export default page;
