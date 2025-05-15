"use client";
import { useParams } from "next/navigation";
import React from "react";
import NavCategoryList from "./NavCategoryList";
import CategoryItems from "./CategoryItems";

function CategoryChoice() {
  const { productName } = useParams();
  const prductDecodeName = decodeURIComponent(productName)
    .toLowerCase()
    .replace(/\s+/g, "");
  return (
    <NavCategoryList
      landingPage={<CategoryItems />}
      landingCategory={prductDecodeName}
    />
  );
}

export default CategoryChoice;
