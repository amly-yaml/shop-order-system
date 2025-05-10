"use client";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
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
  const { orderItems } = useSelector((state) => state.products);
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

  return (
    <>
      <Container disableGutters sx={{ width: "1500px", my: 5, pb: 40 }}>
        <Typography variant="h4" sx={{ my: 5, p: 3 }}>
          Your Order
        </Typography>
        {orderItems.length === 0 && (
          <>
            <Box
              sx={{
                px: 3,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                  mb: 2,
                }}
              >
                🍰🧋🥤 There is no Order. 🍰🧋🥤
              </Typography>
              <Link href="/category/home">
                <Button variant="outlined" color="secondary" sx={{ my: 3 }}>
                  <Typography variant="body1">Order More</Typography>
                </Button>
              </Link>
            </Box>
          </>
        )}
        {orderItems.length !== 0 && (
          <>
            <Grid container spacing={2}>
              {orderItems &&
                orderItems.map((order, index) => {
                  const panel = `panel${index + 1}`;
                  return (
                    <React.Fragment key={index}>
                      <Grid item size={{ xs: 3, sm: 3, md: 2 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => dispatch(removeItemOrder(order.id))}
                          >
                            Remove
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item size={{ xs: 7, sm: 6, md: 6 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "left",
                            alignItems: "left",
                            gap: 3,
                          }}
                        >
                          <Image
                            src={order.drink.image}
                            alt={order.drink.title}
                            width={500}
                            height={500}
                            style={{ width: 85, height: 85 }}
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
                              }}
                            >
                              {order.drink.title}
                            </Typography>
                            <Typography variant="body2">
                              Choice: {order.choice}
                            </Typography>
                            <Typography variant="body2">
                              Size: {order.size}
                            </Typography>
                            <Typography variant="body2">
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
                              <Typography component="span">
                                Add Items
                              </Typography>
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
                      <Grid item size={{ xs: 1, sm: 2, md: 2 }}>
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
                              mx: 2,
                            }}
                          >
                            {order.quantity}
                          </Typography>
                          <AddIcon
                            sx={{
                              ...changeColor,
                              border: `2px solid ${grey[700]}`,
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
                      <Grid item size={{ xs: 1, sm: 1, md: 2 }}>
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
            <Card
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                boxShadow: 7,
                px: 4,
                py: 3,
                zIndex: 1, // to stay above other content
              }}
            >
              <Container disableGutters sx={{ width: "1500px", my: 1 }}>
                <Grid container spacing={2}>
                  {/* Left Half (empty) */}
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Link href="/category/home">
                        <Button variant="outlined" color="secondary">
                          <Typography variant="body1">Order More</Typography>
                        </Button>
                      </Link>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    size={{ xs: 12, md: 6 }}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box sx={{ width: "100%", maxWidth: 460 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body1">SubTotal</Typography>
                        <Typography variant="body1">${getAllTotal}</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body1">GST</Typography>
                        <Typography variant="body1">
                          <span>$</span>0
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h6" fontWeight="bold">
                          Total
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          $ {getAllTotal}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 5,
                    mt: 4,
                    mb: 3,
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => dispatch(clearOrder())}
                  >
                    Order Cancel
                  </Button>
                  <Link href="/">
                    <Button variant="outlined" color="warning">
                      Completed Order
                    </Button>
                  </Link>
                </Box>
              </Container>
            </Card>
          </>
        )}
      </Container>
    </>
  );
}
