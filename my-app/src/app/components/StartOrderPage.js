import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";
import Link from "next/link";
import { itemData } from "../utils/data";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function StartOrderPage() {
  return (
    <>
      <ImageList
        sx={{
          width: "auto",
          height: "auto",
          objectFit: "contain",
          overflowY: "scroll",
        }}
        variant="quilted"
        cols={4}
        rowHeight={402}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        <ImageListItem cols={2}>
          <Link href="/order" passHref legacyBehavior>
            <Typography
              component="a"
              variant="h3"
              align="center"
              sx={{
                width: "100%",
                height: "100%", // make it fill the row height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                "$:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Start Order
            </Typography>
          </Link>
        </ImageListItem>
      </ImageList>
    </>
  );
}
