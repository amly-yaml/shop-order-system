"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { categories } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@mui/material";
import { setCategory } from "../redux/productSlice";

const drawerWidth = 240;

function NavCategoryList({ landingPage, landingCategory, window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { selectedCategory } = useSelector((state) => state.products);
  console.log("selectedCategory", selectedCategory);
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

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
  };

  const drawer = (
    <div>
      <Link href={"/"} passHref>
        <Typography variant="h4" sx={{ my: 5, px: 2 }}>
          Brew Heaven
        </Typography>
      </Link>
      <Divider />
      <List>
        {categories &&
          categories.map((text, index) => {
            const isActive = selectedCategory === text.slug;
            return (
              <Link href={`/category/${text.slug}`} key={index} passHref>
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    onClick={() => handleCategoryClick(text.slug)}
                    sx={{
                      backgroundColor: isActive ? "#d0f0c0" : "inherit", // light green background
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
        <Link href={`/category/myorder`} passHref>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "#e0ffe0", // hover effect
                },
              }}
            >
              <ListItemText
                primary={"My Order"}
                sx={{
                  textAlign: "center",
                  "&:hover": {
                    fontWeight: "bold",
                    color: "#388e3c", // dark green
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          display: { xs: "block", sm: "block", md: "none" }, // ✅ Show only on xs/sm
          // width: "100%", // Full width on small screens
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          //ml: 0,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Order Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Container disableGutters>{landingPage}</Container>
      </Box>
    </Box>
  );
}

export default NavCategoryList;
