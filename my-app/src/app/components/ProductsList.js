import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { green } from "@mui/material/colors";
import Link from "next/link";
import ProductsItem from "./ProductsItem";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItem } from "../redux/productSlice";

export default function ProductsList({ product }) {
  const { selectedCategory } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const changeColor = {
    "&:hover": {
      color: "#fff",
      background: `${green[400]}`,
    },
  };

  return (
    <>
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
      <Box
        sx={{
          my: 2,
          px: 3,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            textAlign: "left",
          }}
        >
          <Typography variant="h6">{product.title}</Typography>
          <Typography variant="h6">{product.price}</Typography>
        </Box>

        <Link
          href={`/category/${selectedCategory}/${product.title.toLowerCase()}`}
        >
          {/* <Button
            variant="outlined"
            sx={{ alignItems: "center" }}
            onClick={() =>
              dispatch(setSelectedItem(product.title.toLowerCase()))
            }
          >
            +
          </Button> */}
          <AddIcon
            sx={{
              ...changeColor,
            }}
            cursor="pointer"
            color="success"
            fontSize="large"
            onClick={() =>
              dispatch(setSelectedItem(product.title.toLowerCase()))
            }
          ></AddIcon>
        </Link>
        {/* <Link href={`/category/home`}>
          <Button variant="outlined" sx={{ alignItems: "center" }}>
            Cancel
          </Button>
        </Link> */}
      </Box>
    </>
  );
}
