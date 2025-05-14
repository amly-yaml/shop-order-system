"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../utils/data";
import Link from "next/link";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        right: "5rem",
        position: "absolute",
        top: "50%",
        zIndex: 1,
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        left: "5rem",
        zIndex: 1,
        position: "absolute",
        top: "50%",
      }}
      onClick={onClick}
    ></div>
  );
}

export default function CustomSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box
      className="slider-container"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
        }}
      >
        {images.map((image, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100vh",
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', 
          zIndex: 1, 
        }}
      />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: { xs: '2rem', md: '3rem' },
            maxWidth: { xs: '90%', md: '80%', lg: '70%' },
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: '3rem', md: '4rem', lg: '5rem', },
              marginBottom: { xs: '1rem', md: '1.5rem' },
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              whiteSpace: 'nowrap',
            }}
          >
            Brew Heaven
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              marginBottom: { xs: '1.5rem', md: '2rem' },
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
            }}
          >
            Drinks & Desserts
          </Typography>
          <Link href="/eat-option">
            <Button
              size="medium"
              sx={{
                backgroundColor: "#fff",
                color: "#6F4E37",
                padding: { xs: '0.75rem 2rem', md: '1rem 3rem' },
                fontSize: { xs: '1rem', md: '1.2rem' },
                borderRadius: 4,
                "&:hover": {
                  backgroundColor: "#6F4E37",
                  color: "#fff",
                },
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              Start to Order
            </Button>
          </Link>
        </Box>
    </Box>
  );
}

