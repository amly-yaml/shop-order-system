import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { allProductsInShop, itemProducts } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { startNewOrder } from "../redux/productSlice";

export default function HomeCategoryPage({ product }) {
  const { selectedCategory } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <>
      {/* {allProductsInShop &&
        allProductsInShop.map((item, index) => {
          <React.Fragment key={index}>
            <Image
              src={item.image}
              alt="image"
              width={500}
              height={500}
              style={{
                width: 150,
                height: 150,
                margin: "0 auto",
                objectFit: "contain",
              }}
            />
            <Box
              sx={{
                my: 1,
                px: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1">$ {item.price}</Typography>
              </Box>
            </Box>
          </React.Fragment>;
        })} */}

      <Link
        href={`/category/${selectedCategory}/${product.title.toLowerCase()}`}
        onClick={() => dispatch(startNewOrder(product))}
      >
        <Typography variant="h6" sx={{ my: 1, p: 1 }}>
          {product.title}
        </Typography>
        <Image
          src={product.image}
          alt="image"
          width={500}
          height={500}
          style={{
            width: 140,
            height: 140,
            margin: "0 auto",
            objectFit: "contain",
          }}
        />
        <Box
          sx={{
            mb: 2,
          }}
        >
          <Typography variant="body1">$ {product.price}</Typography>
        </Box>
      </Link>
    </>
  );
}
