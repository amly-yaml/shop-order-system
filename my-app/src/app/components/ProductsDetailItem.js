import React, { useState } from "react";
import { itemProducts } from "../utils/data";
import Image from "next/image";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  addAddOn,
  addToOrder,
  cancelItem,
  chooseSize,
  chooseType,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/productSlice";
import { green, grey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ProductsDetailItem() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { selectedCategory, selectedItem, currentOrder } = useSelector(
    (state) => state.products
  );
  console.log("selectedCategoryforProductItems", selectedItem);
  console.log("currentOrder", currentOrder);

  if (!selectedItem) return null;
  const foundItemObject = itemProducts.find((item) => item[selectedItem]);
  if (!foundItemObject)
    return (
      <Box>
        <Typography variant="h4" sx={{ p: 3 }}>
          No item found.
        </Typography>
      </Box>
    );
  const foundItem = foundItemObject[selectedItem];
  if (!currentOrder)
    return (
      <Box sx={{ p: 5 }}>
        <Typography variant="h4">
          Please select an order (coffee, non-coffee, cake) first 🍰🧋🥤 !!!
        </Typography>
      </Box>
    );

  const isSelectedTopping = (topping) =>
    currentOrder?.addOns.find((item) => item.name === topping.name);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeColor = {
    "&:hover": {
      color: "#fff",
      background: `${green[500]}`,
    },
  };

  return (
    <>
      <Container
        disableGutters
        sx={{
          maxWidth: "1000px",
          width: "100%",
          mx: "auto", // center container horizontally
          my: 6,
          px: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, sm: 12, md: 5, lg: 6 }}>
            <Box>
              <Image
                src={foundItem.image}
                alt="image"
                width={500}
                height={500}
                style={{
                  width: 230,
                  height: 230,
                  margin: "auto",
                  objectFit: "cover",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></Image>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 7, lg: 6 }}>
            <Box sx={{ m: 2 }}>
              <Typography variant="h5">{foundItem.name}</Typography>
              {/* <Typography variant="h5">{foundItem.price}</Typography> */}
              <Box
                sx={{
                  my: 3,
                  // display: "flex",
                  // justifyContent: "left",
                  // flexWrap: "wrap", // optional: if too many buttons, they wrap
                  // gap: 2,
                }}
              >
                <ButtonGroup>
                  {foundItem.choice.map((choiceItem, index) => {
                    const isSelected = choiceItem === currentOrder?.choice;
                    return (
                      <Button
                        key={index}
                        variant={isSelected ? "contained" : "outlined"}
                        color={isSelected ? "success" : "primary"}
                        onClick={() => dispatch(chooseType(choiceItem))}
                      >
                        {choiceItem}
                      </Button>
                    );
                  })}
                </ButtonGroup>
              </Box>

              <Box>
                <Typography variant="h6">Size options</Typography>
                <Box
                  sx={{
                    my: 1,
                    // display: "flex",
                    // justifyContent: "left",
                    // flexWrap: "wrap", // optional: if too many buttons, they wrap
                  }}
                >
                  <ButtonGroup>
                    {foundItem.size.map((sizeItem, index) => {
                      const isSelected = currentOrder?.size === sizeItem.name;
                      return (
                        <Box key={index}>
                          <Button
                            variant={isSelected ? "contained" : "outlined"}
                            color={isSelected ? "success" : "primary"}
                            onClick={() => dispatch(chooseSize(sizeItem))}
                          >
                            {sizeItem.name}
                          </Button>
                          <Typography
                            sx={{
                              my: 1,
                              textAlign: "center",
                            }}
                          >
                            $ {sizeItem.price}
                          </Typography>
                        </Box>
                      );
                    })}
                  </ButtonGroup>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography sx={{ my: 1.5 }} variant="h6">
          Customization AddOns
        </Typography>
        <Grid container spacing={2}>
          {foundItem.toppings.map((topping, index) => {
            const isSelected = isSelectedTopping(topping) && {
              backgroundColor: green[400],
            };
            return (
              <Grid
                key={index}
                item
                // xs={12}
                // sm={6}
                // md={4}
                // lg={4}
                size={{ xs: 12, sm: 6, md: 3, lg: 2 }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    boxShadow: 1,
                    borderRadius: 2,
                    py: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    overflow: "hidden",
                    wordBreak: "break-all",
                    cursor: "pointer",
                    ...isSelected,
                  }}
                  onClick={() => dispatch(addAddOn(topping))}
                >
                  <Image
                    src={topping.image}
                    alt="image"
                    width={500}
                    height={500}
                    style={{
                      width: 70,
                      height: 70,
                      margin: "0 auto",
                      objectFit: "contain",
                      marginBottom: "10px",
                    }}
                  />
                  <Divider />
                  <Box
                    sx={{
                      my: 1,
                    }}
                  >
                    <Typography>{topping.name}</Typography>
                    <Typography variant="subtitle2">
                      ${topping.price}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Box
          sx={{
            my: 3,
            width: "100%", // make sure it spans full width
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              py: 1.5,
              px: 3,
            }}
            onClick={handleClickOpen}
          >
            Order Item
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
              p: 3,
            }}
          >
            <DialogTitle
              id="alert-dialog-title"
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                //border: `1px solid ${grey[500]}`,
              }}
            >
              Add Quantity
            </DialogTitle>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
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
                onClick={() => dispatch(decreaseQuantity())}
              ></RemoveIcon>
              <Typography
                variant="h5"
                sx={{
                  mx: 2,
                }}
              >
                {currentOrder?.quantity || 0}
              </Typography>
              <AddIcon
                sx={{
                  ...changeColor,
                  border: `2px solid ${grey[700]}`,
                }}
                cursor="pointer"
                color="success"
                fontSize="medium"
                onClick={() => dispatch(increaseQuantity())}
              ></AddIcon>
            </Box>
            <DialogActions
              sx={{
                p: 4,
              }}
            >
              <Link href={`/category/${selectedCategory}`}>
                <Button
                  variant="contained"
                  sx={{
                    mr: 5,
                    p: 1.5,
                    px: 5,
                  }}
                  onClick={() => dispatch(addToOrder())}
                >
                  Add To Order
                </Button>
              </Link>
              <Link href="/category/home">
                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    py: 1.5,
                    px: 5,
                  }}
                  onClick={() => dispatch(cancelItem())}
                >
                  Cancel Item
                </Button>
              </Link>
            </DialogActions>
          </Dialog>
        </Box>
      </Container>
    </>
  );
}
