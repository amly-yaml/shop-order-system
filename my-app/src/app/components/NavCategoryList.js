import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory, setCategory } from "../redux/productSlice";
import { Container } from "@mui/material";
import { categories } from "../utils/data";
import Link from "next/link";

function NavCategoryList({ landingPage, landingCategory }) {
  const { selectedCategory } = useSelector((state) => state.products);
  console.log("selectedCategory", selectedCategory);
  const dispatch = useDispatch();
  const drawerWidth = 240;

  useEffect(() => {
    if (landingCategory) {
      // const defaultCategory = landingCategory || "home";
      dispatch(setCategory(landingCategory));
    } else {
      dispatch(setCategory(selectedCategory));
    }
    //dispatch(fetchProductsByCategory(defaultCategory));
  }, [landingCategory]);

  const handleCategoryClick = (categoryName) => {
    dispatch(setCategory(categoryName));
    //dispatch(fetchProductsByCategory(categoryName));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          textAlign: "center",
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h4" sx={{ my: 5 }}>
          Brew Haven
        </Typography>
        <Divider />
        <List>
          {categories.map((text, index) => {
            const isActive = selectedCategory === text.slug;
            return (
              <Link href={`/category/${text.slug}`} key={index}>
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    onClick={() => handleCategoryClick(text.slug)}
                    sx={{
                      // backgroundColor: isActive ? "#d0f0c0" : "inherit", // light green background
                      "&:hover": {
                        backgroundColor: "#e0ffe0", // hover effect
                      },
                    }}
                  >
                    <ListItemText
                      primary={text.name}
                      sx={{
                        textAlign: "center",
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "#388e3c" : "inherit", // dark green
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Container disableGutters>{landingPage}</Container>
      </Box>
    </Box>
  );
}

export default NavCategoryList;
