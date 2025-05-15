"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { categories, products } from "../utils/data";
import ProductsList from "./ProductsList";
import HomeCategoryPage from "./HomeCategoryPage";

function CategoryItems() {
  const [selectedPage, setSelectedPage] = useState("home");
  const { selectedCategory } = useSelector((state) => state.products);
  // const products = items.products;
  console.log("products", selectedCategory);
  const selectedCategoryProduct = selectedCategory === selectedPage;
  // console.log("items", items);

  return (
    <>
      <Container
        disableGutters
        sx={{
          maxWidth: "1000px",
          width: "100%",
          mx: "auto", // center container horizontally
        }}
      >
        <Grid container spacing={2}>
          {selectedCategory &&
            products[selectedCategory].map((product, index) => {
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                  <Card
                    key={index}
                    sx={{
                      maxWidth: 330,
                      mt: 5,
                      borderRadius: 3,
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    {selectedCategoryProduct ? (
                      <>
                        <HomeCategoryPage product={product}></HomeCategoryPage>
                      </>
                    ) : (
                      <>
                        <ProductsList product={product}></ProductsList>
                      </>
                    )}
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}

export default CategoryItems;
