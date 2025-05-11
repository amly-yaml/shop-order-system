"use client";
import React from "react";
import CategoryItems from "@/app/components/CategoryItems";
import NavCategoryList from "@/app/components/NavCategoryList";
import { useParams } from "next/navigation";

export default function page() {
  const { text } = useParams();
  return (
    <NavCategoryList landingPage={<CategoryItems />} landingCategory={text} />
  );
}
