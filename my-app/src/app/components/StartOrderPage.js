// import * as React from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import { Typography } from "@mui/material";
// import Link from "next/link";
// import { itemData } from "../utils/data";

// function srcset(image, size, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${
//       size * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

// export default function StartOrderPage() {
//   return (
//     <>
//       <ImageList
//         sx={{
//           width: "auto",
//           height: "auto",
//           objectFit: "contain",
//           overflowY: "scroll",
//         }}
//         variant="quilted"
//         cols={4}
//         rowHeight={402}
//       >
//         {itemData.map((item) => (
//           <ImageListItem
//             key={item.img}
//             cols={item.cols || 1}
//             rows={item.rows || 1}
//           >
//             <img
//               {...srcset(item.img, 121, item.rows, item.cols)}
//               alt={item.title}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}
//         <ImageListItem cols={2}>
//           <Link href="/order" passHref legacyBehavior>
//             <Typography
//               component="a"
//               variant="h3"
//               align="center"
//               sx={{
//                 width: "100%",
//                 height: "100%", // make it fill the row height
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 textAlign: "center",
//                 cursor: "pointer",
//                 "$:hover": {
//                   textDecoration: "underline",
//                 },
//               }}
//             >
//               Start Order
//             </Typography>
//           </Link>
//         </ImageListItem>
//       </ImageList>
//     </>
//   );
// }

"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../utils/data";

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
    ></div>
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
    ></div>
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
    <Box className="slider-container">
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
      <Link
        href="/eat-option"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography
          variant="h4"
          mt={2}
          sx={{ textAlign: "center", cursor: "pointer" }}
        >
          Start to Order
        </Typography>
      </Link>
    </Box>
  );
}
