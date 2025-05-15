"use client";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearOrder,
  decreaseQuantityCart,
  getAllTotalPrice,
  increaseQuantityCart,
  removeItemOrder,
} from "../redux/productSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { green, grey } from "@mui/material/colors";
import Link from "next/link";
import { setOrderNumber } from "../redux/orderSlice";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const changeColor = {
  "&:hover": {
    color: "#fff",
    background: `${green[400]}`,
  },
};

export default function MyOrderPage() {
  const [expanded, setExpanded] = React.useState("null");
  // const { orderNumber } = useSelector((state) => state.order);
  const { orderItems, selectPlace } = useSelector((state) => state.products);
  const [orderNumber, setOrderNumberLocal] = useState("");
  console.log("orderItems", orderItems);
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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const number = `#${randomNum}`;
    setOrderNumberLocal(number);
    dispatch(setOrderNumber(number));
  }, [dispatch]);
  return (
    <>
      <Container
        disableGutters
        sx={{
          maxWidth: "1000px",
          width: "100%",
          my: 5,
          pb: 40,
          px: 3,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4" sx={{ color: "#3e2723" }}>
            Your Order
          </Typography>
          <Link href="/category/home">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#3e2723",
                fontWeight: "bold",
                px: 4,
                py: 1.3,
                border: "2px solid #3e2723",
                "&:hover": {
                  backgroundColor: "#bcaaa4",
                  color: "#fff",
                },
              }}
            >
              Order More
            </Button>
          </Link>
        </Box>

        {orderItems.length === 0 && (
          <>
            <Box
              sx={{
                px: 3,
                my: 3,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: {
                    xs: "1.25rem",
                    sm: "1.5rem",
                    md: "2rem",
                    color: "#3e2723",
                  },
                  mb: 2,
                }}
              >
                🍰🧋🥤 There is no Order. 🍰🧋🥤
              </Typography>
            </Box>
          </>
        )}
        {orderItems.length !== 0 && (
          <>
            <Box sx={{ display: "flex", gap: 5 }}>
              <Typography
                sx={{ fontWeight: "bold", mb: 5, color: "#8d6e63", pt: 2 }}
              >
                Order {orderNumber}
              </Typography>
              <Typography
                variant="subtitle2"
                color="secondary"
                sx={{ fontWeight: "bold", mb: 5, pt: 2 }}
              >
                ({selectPlace})
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {orderItems.map((order, index) => {
                const panel = `panel${index + 1}`;
                return (
                  <React.Fragment key={index}>
                    <Grid item size={{ xs: 1, sm: 3, md: 2, lg: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <DeleteIcon
                          sx={{
                            ...changeColor,
                            fontSize: {
                              xs: "1.1rem", // small screen
                              sm: "1.25rem", // medium screen
                              // md: "1.5rem", // large screen and up
                            },
                          }}
                          cursor="pointer"
                          color="error"
                          fontSize="medium"
                          onClick={() => dispatch(removeItemOrder(order.id))}
                        ></DeleteIcon>
                      </Box>
                    </Grid>
                    <Grid item size={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "left",
                          alignItems: "left",
                          gap: 1,
                        }}
                      >
                        <Image
                          src={order.drink.image}
                          alt={order.drink.title}
                          width={500}
                          height={500}
                          style={{ width: 80, height: 80 }}
                        ></Image>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              overflow: "hidden",
                              wordBreak: "break-all",
                              fontSize: {
                                xs: "0.75rem",
                                sm: "0.85rem",
                                md: "0.9rem",
                              },
                            }}
                          >
                            {order.drink.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: {
                                xs: "0.7rem",
                                sm: "0.75rem",
                                md: "0.8rem",
                              },
                            }}
                          >
                            Choice: {order.choice}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: {
                                xs: "0.7rem",
                                sm: "0.75rem",
                                md: "0.8rem",
                              },
                            }}
                          >
                            Size: {order.size}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: {
                                xs: "0.7rem",
                                sm: "0.75rem",
                                md: "0.8rem",
                              },
                            }}
                          >
                            Price: ${order.basePrice}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ my: 2 }}>
                        <Accordion
                          expanded={expanded === panel}
                          onChange={handleChange(panel)}
                        >
                          <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                          >
                            <Typography component="span">Add Items</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            {order.addOns.map((addon, index) => {
                              return (
                                <React.Fragment key={index}>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "left",
                                      gap: 1,
                                      my: 2,
                                    }}
                                  >
                                    <Image
                                      src={addon.image}
                                      alt={addon.name}
                                      width={500}
                                      height={500}
                                      style={{ width: 38, height: 38 }}
                                    ></Image>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <Typography variant="caption">
                                        {addon.name}
                                      </Typography>
                                      <Typography variant="caption">
                                        ${addon.price}
                                      </Typography>
                                    </Box>
                                  </Box>
                                </React.Fragment>
                              );
                            })}
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    </Grid>
                    <Grid item size={{ xs: 3, sm: 2, md: 2, lg: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          //border: `1px solid ${grey[500]}`,
                        }}
                      >
                        <RemoveIcon
                          sx={{
                            ...changeColor,
                            border: `2px solid ${grey[700]}`,
                            fontSize: {
                              xs: "1.1rem", // small screen
                              sm: "1.25rem", // medium screen
                              // md: "1.5rem", // large screen and up
                            },
                          }}
                          cursor="pointer"
                          color="success"
                          fontSize="medium"
                          onClick={() =>
                            dispatch(decreaseQuantityCart(order.id))
                          }
                        ></RemoveIcon>
                        <Typography
                          variant="body1"
                          sx={{
                            mx: 1,
                          }}
                        >
                          {order.quantity}
                        </Typography>
                        <AddIcon
                          sx={{
                            ...changeColor,
                            border: `2px solid ${grey[700]}`,
                            fontSize: {
                              xs: "1.1rem", // small screen
                              sm: "1.25rem", // medium screen
                              // md: "1.5rem", // large screen and up
                            },
                          }}
                          cursor="pointer"
                          color="success"
                          fontSize="medium"
                          onClick={() =>
                            dispatch(increaseQuantityCart(order.id))
                          }
                        ></AddIcon>
                      </Box>
                    </Grid>
                    <Grid item size={{ xs: 1, sm: 1, md: 2, lg: 2 }}>
                      <Box textAlign="left">
                        <Typography variant="body1">
                          ${getOrderTotal(order)}
                        </Typography>
                      </Box>
                    </Grid>
                  </React.Fragment>
                );
              })}
            </Grid>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderTop: "1px solid #ccc",
                  pt: 2,
                  mt: 2,
                }}
              >
                <Typography fontSize="20px" fontWeight="bold" color="#3e2723">
                  Total
                </Typography>
                <Typography fontSize="20px" fontWeight="bold" color="#3e2723">
                  ${getAllTotal}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <Link href="/">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#3e2723",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.3,
                    border: "2px solid #3e2723",
                    "&:hover": {
                      backgroundColor: "#bcaaa4",
                      color: "#fff",
                    },
                  }}
                  onClick={() => dispatch(clearOrder())}
                >
                  Order Cancel
                </Button>
              </Link>

              <Link href="/payment">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#4e342e",
                    color: "#fff",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: "#ffa726",
                    },
                  }}
                >
                  Pay Now / Check out
                </Button>
              </Link>
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
