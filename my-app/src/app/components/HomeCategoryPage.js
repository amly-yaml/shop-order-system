import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomeCategoryPage({ product }) {
  return (
    <>
      <Link href={`/category/${product.slug}`}>
        <Typography variant="h6" sx={{ my: 2, p: 2 }}>
          {product.title}
        </Typography>
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
      </Link>
    </>
  );
}
