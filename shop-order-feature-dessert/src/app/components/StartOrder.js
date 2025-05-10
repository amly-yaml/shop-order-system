"use client";
import React from "react";
import Slider from "react-slick";

import { Box, Link, Typography } from "@mui/material";
import { images } from "@/data/data";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      style={{
        ...style,
        display: "block",
        right: "5rem",
        position: "absolute",
        top: "50%",
      }}
      onClick={onClick}
    >
     
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      style={{
        ...style,
        left: "5rem",
        zIndex: 1,
        position: "absolute",
        top: "50%",
      }}
      onClick={onClick}
    >
     
    </div>
  );
}

export default function CustomSlider() {
  var settings = {
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
    <Box className="slider-container" >
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <React.Fragment key={index}>
              <Image
                src={image}
                alt="img"
                width={1500}
                height={500}
                style={{
                  height: 700,
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </React.Fragment>
          );
        })}
      </Slider>
      <Link href="/eat-option" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="h4" mt={2} sx={{ textAlign: 'center', cursor: 'pointer' }}>
          Start to Order
        </Typography>
      </Link>
    </Box>
  );
}