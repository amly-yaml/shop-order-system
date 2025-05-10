"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getAllTotalPrice } from "../redux/productSlice";

function PaymentPage() {
  const getAllTotal = useSelector(getAllTotalPrice);

  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        How would you like to pay?
      </Typography>

      <Typography sx={{ mb: 4 }} fontSize="18px">
        Total: ${getAllTotal}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 300,
          mx: "auto",
        }}
      >
        <Link href="/order-confirm" passHref legacyBehavior>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffc107",
              color: "black",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#ffb300",
              },
            }}
            fullWidth
          >
            Cash at Counter
          </Button>
        </Link>

        <Link href="/order-confirm">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
            fullWidth
          >
            Card / Nets
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default PaymentPage;
