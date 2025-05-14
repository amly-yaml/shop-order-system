"use client";
import React from "react";
import {  Grid, Typography, Box, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setPlaceToEat } from "../redux/productSlice";
import { imageData } from "../utils/data";

export default function OrderPage() {
  const dispatch = useDispatch();
  

  const handleSelector = (title) => {
    dispatch(setPlaceToEat(title));
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('https://images.pexels.com/photos/97815/pexels-photo-97815.jpeg?auto=compress&cs=tinysrgb&w=1200')`, 
        // backgroundImage: `url('https://images.pexels.com/photos/1724194/pexels-photo-1724194.jpeg?auto=compress&cs=tinysrgb&w=1200')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", 
        minWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <Container disableGutters sx={{
        maxWidth: "800px",
        my: 15,
        backgroundColor: 'transparent', 
        borderRadius: '10px',
        padding: '15px',
        backdropFilter: 'blur(10px)', 
        border: '1px solid #fff'
      }}>
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
          <Typography variant="h3" sx={{ my: 7, color: '#fff' }}>
            Where would you like to eat?
          </Typography>
          {imageData &&
            imageData.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Grid item size={{ xs: 12, sm: 4, md: 6 }}>
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
                            borderRadius: '10px'
                          }}
                        ></Image>
                        <Typography variant="h5" sx={{ my: 5, color: '#fff' }}>
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
    </Box>
  );
}
