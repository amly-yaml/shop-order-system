"use client";

 import React from 'react';
 import { Drawer, List, ListItem, ListItemText, Toolbar, Typography, Box } from '@mui/material';
 import Link from 'next/link';

 const drawerWidth = 240;

 export default function Sidebar() {
  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Coffee', href: '/coffee' },
    { text: 'Non-Coffee', href: '/non-coffee' },
    { text: 'Desserts', href: '/desserts' },
    { text: 'My orders', href: '/my-orders' },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        '& .MuiDrawer-paper': {
          width: '240px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#FFFFFF'
        },
      }}
      variant="permanent"
      

    >
      <Toolbar />

      <Box sx={{ py: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#8B4513', textAlign: 'center' }}>
          Drink & Desserts
        </Typography>
      </Box>
      <List sx={{ width: '100%' }}>
        {menuItems.map((item) => (
          <ListItem
            button="true"
            key={item.text}
            component={Link}
            href={item.href}
            sx={{
              textDecoration: 'none',
              color: '#6F4F37',
              justifyContent: 'center',
              '&:hover': {
                backgroundColor: '#8B4513',
                color: '#fff',
              },
            }}
          >
            <ListItemText primary={item.text} sx={{ textAlign: 'center' }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
 }