"use client";

import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
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
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
      
    >
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component={Link} href={item.href} sx={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}