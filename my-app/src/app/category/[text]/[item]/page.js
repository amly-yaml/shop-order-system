"use client";
import NavCategoryList from "@/app/components/NavCategoryList";
import ProductsItem from "@/app/components/ProductsItem";
import { setSelectedItem } from "@/app/redux/productSlice";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function page() {
  const dispatch = useDispatch();
  const { text, item } = useParams();
  useEffect(() => {
    dispatch(setSelectedItem(item));
  });

  return (
    <NavCategoryList
      landingPage={<ProductsItem></ProductsItem>}
      landingCategory={text}
    />
  );
}
