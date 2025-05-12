import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { startNewOrder } from "../redux/productSlice";

export default function ProductsList({ product }) {
  const { selectedCategory } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <Link
        href={`/category/${selectedCategory}/${product.title.toLowerCase()}`}
        onClick={() => dispatch(startNewOrder(product))}
      >
        <Image
          src={product.image}
          alt="image"
          width={500}
          height={500}
          style={{
            width: 180,
            height: 180,
            margin: "0 auto",
            objectFit: "contain",
          }}
        />
        <Box
          sx={{
            my: 2,
            px: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body1">$ {product.price}</Typography>
          </Box>
        </Box>
      </Link>
    </>
  );
}
