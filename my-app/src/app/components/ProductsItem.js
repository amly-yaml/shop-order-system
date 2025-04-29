import React, { useState } from "react";
import { itemsCoffee, products } from "../utils/data";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

export default function ProductsItem() {
  const { selectedItem } = useSelector((state) => state.products);
  console.log("selectedCategoryforProductItems", selectedItem);

  if (!selectedItem) return null;
  const foundItemObject = itemsCoffee.find((item) => item[selectedItem]);
  if (!foundItemObject) return <div>No item found.</div>;
  const foundItem = foundItemObject[selectedItem];
  return (
    <>
      <Container disableGutters sx={{ width: "1000px" }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                mx: 5,
              }}
            >
              <Image
                src={foundItem.image}
                alt="image"
                width={500}
                height={500}
                style={{
                  width: 310,
                  height: 310,
                  margin: "0 auto",
                  objectFit: "cover",
                }}
              ></Image>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ my: 5 }}>
              <Typography variant="h5">{foundItem.name}</Typography>
              <Box
                sx={{
                  my: 4,
                  display: "flex",
                  justifyContent: "left",
                  flexWrap: "wrap", // optional: if too many buttons, they wrap
                  gap: 2,
                }}
              >
                {foundItem.choice.map((choiceItem, index) => (
                  <Button key={index} variant="outlined">
                    <Typography>{choiceItem}</Typography>
                  </Button>
                ))}
              </Box>

              <Box>
                <Typography variant="h6">Size options</Typography>
                <Box
                  sx={{
                    my: 3,
                    display: "flex",
                    justifyContent: "left",
                    flexWrap: "wrap", // optional: if too many buttons, they wrap
                    gap: 2,
                  }}
                >
                  {foundItem.size.map((sizeitem, index) => (
                    <Button key={index} sx={{ px: 3 }} variant="outlined">
                      {sizeitem}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Typography sx={{ my: 3 }} variant="h6">
          Customization
        </Typography>
        <Grid container spacing={2}>
          {foundItem.toppings.map((topping, index) => (
            <React.Fragment key={index}>
              <Grid size={{ sx: 6, sm: 4, md: 2 }}>
                <Card
                  sx={{
                    my: 3,
                    borderRadius: 3,
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={topping.image}
                    alt="image"
                    width={500}
                    height={500}
                    style={{
                      width: 130,
                      height: 130,
                      margin: "0 auto",
                      objectFit: "contain",
                    }}
                  />
                  <Divider />
                  <Box
                    sx={{
                      my: 2,
                    }}
                  >
                    <Typography>{topping.name}</Typography>
                    <Typography variant="subtitle2">{topping.price}</Typography>
                  </Box>
                </Card>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </>
  );
}
