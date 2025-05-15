import React from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../redux/productSlice";
import CartItem from "./CartItem";
import { Drawer } from "@mui/material";

export default function CustomDrawerCart() {
  const { open } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <Drawer
        open={open}
        anchor="right"
        onClose={() => dispatch(toggleCart(false))}
      >
        <CartItem></CartItem>
      </Drawer>
    </div>
  );
}
