import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { green } from "@mui/material/colors";
import Link from "next/link";
import ProductsItem from "./ProductsItem";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/productSlice";

export default function ProductsList({ product }) {
  // const { selectedCategory } = useSelector((state) => state.products);
  // console.log(selectedCategory, selectedCategory);
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
      <Box sx={{ my: 2, px: 5, textAlign: "left" }}>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="h6">{product.price}</Typography>
        <Link href={`/category/${product.title.toLowerCase()}`} passHref>
          <AddIcon
            sx={{
              ...changeColor,
            }}
            cursor="pointer"
            color="success"
            fontSize="medium"
            onClick={() => dispatch(setCategory(product.title.toLowerCase()))}
          ></AddIcon>
        </Link>
      </Box>
    </>
  );
}
