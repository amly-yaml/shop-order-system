"use client";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setPlaceToEat } from "../redux/productSlice";

const imageData = [
  {
    img: "/images/coffee.png",
    title: "Eat In",
  },
  {
    img: "/images/takeaway.png",
    title: "Take Away",
  },
];

export default function TitlebarBelowImageList() {
  const dispatch = useDispatch();

  const handleSelector = (title) => {
    dispatch(setPlaceToEat(title));
  };

  return (
    <>
      <Container disableGutters sx={{ width: "800px", my: 15 }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ my: 7 }}>
            Where would you like to eat?
          </Typography>
          {imageData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Grid size={6}>
                  <Link
                    href="/category/home"
                    onClick={() => handleSelector(item.title)}
                  >
                    <Box>
                      <Image
                        src={item.img}
                        alt="image"
                        width={500}
                        height={500}
                        style={{
                          width: 200,
                          height: 200,
                          margin: "0 auto",
                          objectFit: "cover",
                        }}
                      ></Image>
                      <Typography variant="h5" sx={{ my: 5 }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </Link>
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
