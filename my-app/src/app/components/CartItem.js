"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantityCart,
  getAllTotalPrice,
  increaseQuantityCart,
  removeItemOrder,
} from "../redux/productSlice";
import { setOrderNumber } from "../redux/orderSlice";
import Link from "next/link";
import { Close } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import {
  blueGrey,
  deepOrange,
  green,
  grey,
  lightBlue,
  lightGreen,
} from "@mui/material/colors";
import Image from "next/image";

export default function CartItem() {
  const [orderNumber, setOrderNumberLocal] = useState("");
  const { orderItems } = useSelector((state) => state.products);
  const getAllTotal = useSelector(getAllTotalPrice);
  const dispatch = useDispatch();
  const getOrderTotal = (order) => {
    const basePrice = parseFloat(order.basePrice);
    const addOnsPrice = order.addOns.reduce(
      (sum, addOn) => sum + parseFloat(addOn.price),
      0
    );
    const total = (basePrice + addOnsPrice) * order.quantity;
    return total.toFixed(2);
  };

  useEffect(() => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const number = `#${randomNum}`;
    setOrderNumberLocal(number);
    dispatch(setOrderNumber(number));
  }, [dispatch]);

  const changeColor = {
    "&:hover": {
      color: "#fff",
      background: `${green[400]}`,
    },
  };

  return (
    <>
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", my: 3 }}>
          <Typography variant="h6">Your Order</Typography>
          <Close
            sx={{ ...changeColor }}
            cursor="pointer"
            fontSize="small"
            onClick={() => dispatch(toggleCart(false))}
          ></Close>
        </Box>

        {orderItems.map((cartItem, index) => {
          return (
            <React.Fragment key={index}>
              <Box sx={{ display: "flex", gap: 3, my: 2 }}>
                <Box sx={{ width: "100px" }}>
                  <Image
                    src={cartItem.drink.image}
                    alt={cartItem.drink.title}
                    width={500}
                    height={500}
                    style={{ width: 85, height: 85 }}
                  ></Image>
                </Box>

                <Box
                  sx={{
                    width: "300px", // Fixed width
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{ overflow: "hidden", wordBreak: "break-all" }}
                  >
                    {cartItem.drink.title}
                  </Typography>
                  <Typography variant="body2">
                    Choice: {cartItem.choice}
                  </Typography>
                  <Typography variant="body2">Size: {cartItem.size}</Typography>
                  <Typography variant="body2">
                    Price: ${cartItem.basePrice}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        border: `1px solid ${grey[500]}`,
                      }}
                    >
                      <RemoveIcon
                        sx={{ ...changeColor }}
                        cursor="pointer"
                        color="success"
                        fontSize="medium"
                        onClick={() =>
                          dispatch(decreaseQuantityCart(cartItem.id))
                        }
                      ></RemoveIcon>
                      <Typography variant="body1" sx={{ mx: 2 }}>
                        {cartItem.quantity}
                      </Typography>
                      <AddIcon
                        sx={{
                          ...changeColor,
                        }}
                        cursor="pointer"
                        color="success"
                        fontSize="medium"
                        onClick={() =>
                          dispatch(increaseQuantityCart(cartItem.id))
                        }
                      ></AddIcon>
                    </Box>

                    <Box>
                      <Typography variant="body1">
                        ${getOrderTotal(order)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <DeleteIcon
                  sx={{
                    color: `${deepOrange[600]}`,
                    "&:hover": {
                      color: `${green[700]}`,
                    },
                  }}
                  cursor="pointer"
                  fontSize="small"
                  color="error"
                  onClick={() => dispatch(removeItemOrder(cartItem.id))}
                ></DeleteIcon>
              </Box>
            </React.Fragment>
          );
        })}
        {orderItems.length !== 0 && (
          <>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", my: 3 }}
            >
              <Typography variant="subtitle1">Total</Typography>
              <Typography variant="subtitle1">${getAllTotal}</Typography>
            </Box>
            <Stack direction="column" spacing={2}>
              <Link href="/payment">
                <Button variant="contained" color="success">
                  Proceed To Checkout
                </Button>
              </Link>

              <Link href="/category/myorer">
                <Button variant="outlined" color="primary">
                  Order Detail
                </Button>
              </Link>
            </Stack>
          </>
        )}
      </Box>
    </>
  );
}
