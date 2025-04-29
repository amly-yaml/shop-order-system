"use client";
import React from "react";
import CategoryItems from "@/app/components/CategoryItems";
import NavCategoryList from "@/app/components/NavCategoryList";
import { useParams } from "next/navigation";
import ProductsItem from "@/app/components/ProductsItem";

export default function page() {
  return <NavCategoryList landingPage={<ProductsItem></ProductsItem>} />;
}
