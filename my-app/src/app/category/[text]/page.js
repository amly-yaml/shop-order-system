"use client";
import React from "react";
import CategoryItems from "../../components/CategoryItems";
import IndexPage from "../../components/IndexPage";
import CategoryList from "../../components/CategoryList";
import { useParams } from "next/navigation";

function page() {
  const { text } = useParams();
  return (
    <CategoryList
      landingPage={<CategoryItems></CategoryItems>}
      landingCategory={text}
    />
  );
}

export default page;
