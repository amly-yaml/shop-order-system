import React, { useState } from "react";
import { items, products } from "../utils/data";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function ProductsItem({ product }) {
  const { selectedCategory } = useSelector((state) => state.products);
  console.log("selectedCategoryforProductItems", selectedCategory);

  if (!selectedCategory) return null;
  const foundItemObject = items.find((item) => item[selectedCategory]);
  if (!foundItemObject) return <div>No item found.</div>;
  const foundItem = foundItemObject[selectedCategory];
  return (
    <>
      <Container disableGutters>
        <Grid container spacing={2}>
          <Box>
            <Grid
              size={{ xs: 12, md: 2 }}
              sx={{
                py: 4,
              }}
            >
              <Box>
                <Image
                  src={foundItem.image}
                  alt="image"
                  width={500}
                  height={500}
                  style={{
                    width: 110,
                    height: 110,
                    margin: "0 auto",
                    objectFit: "cover",
                  }}
                ></Image>
                <Typography>{foundItem.name}</Typography>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
