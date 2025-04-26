"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { categories, products } from "../utils/data";
import ProductsList from "./ProductsList";

function CategoryItems() {
  const [selectedPage, setSelectedPage] = useState("home");
  const { status, items, selectedCategory } = useSelector(
    (state) => state.products
  );
  // const products = items.products;
  // console.log("products", selectedCategory);
  if (status === "loading") return <p>Loading...</p>;
  const selectedCategoryProduct = selectedCategory === selectedPage;
  // console.log("items", items);

  return (
    <Grid container spacing={2}>
      {selectedCategory &&
        products[selectedCategory].map((product, index) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  maxWidth: 330,
                  my: 5,
                  borderRadius: 3,
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                {selectedCategoryProduct ? (
                  <>
                    <Typography variant="h6" sx={{ my: 2, p: 2 }}>
                      {product.title}
                    </Typography>
                    <Image
                      src={product.image}
                      alt="image"
                      width={500}
                      height={500}
                      style={{
                        width: 230,
                        height: 230,
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    />
                  </>
                ) : selectedCategory === "order" ? (
                  <></>
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
  );
}

export default CategoryItems;
