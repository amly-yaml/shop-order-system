"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function OrderConfrimPage() {
  const orderNumber = useSelector((state) => state.order.orderNumber);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(to bottom right, #fff8e1, #fff3e0)",
          borderRadius: "24px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          p: 6,
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2} color="#6d4c41">
          Thank you!
        </Typography>

        <Typography variant="h5" fontWeight="medium" mb={2} color="#8d6e63">
          Your order{" "}
          <span style={{ fontWeight: "bold", color: "#d84315" }}>
            {orderNumber}
          </span>{" "}
          has been sent to the kitchen.
        </Typography>

        <Typography fontSize="18px" mb={4} color="#5d4037">
          Please collect your food when your order number appears on the board.
        </Typography>

        <Link href="/" passHref legacyBehavior>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffcc80",
              color: "#4e342e",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              "&:hover": {
                backgroundColor: "#ffb74d",
              },
            }}
          >
            Back to Menu
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
