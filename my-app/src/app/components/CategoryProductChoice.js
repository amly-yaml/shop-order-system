"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavCategoryList from "./NavCategoryList";
import { setSelectedItem } from "../redux/productSlice";
import ProductsDetailItem from "./ProductsDetailItem";

export default function CategoryProductChoice() {
  const { productName, productDetail } = useParams();
  const dispatch = useDispatch();
  const prductDecodeName = decodeURIComponent(productName).replace(/\s+/g, "");
  const itemDecodeName = decodeURIComponent(productDetail).replace(/\s+/g, "");

  useEffect(() => {
    dispatch(setSelectedItem(itemDecodeName));
  });

  return (
    <NavCategoryList
      landingPage={<ProductsDetailItem></ProductsDetailItem>}
      landingCategory={prductDecodeName}
    />
  );
}
