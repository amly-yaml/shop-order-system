'use client';
import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import productsData from '../../data/products.json';

export default function DessertsPage() {
  return (
    <Box sx={{ paddingTop: 3, paddingX: 2 }}>
      <Typography variant="h4" color="#6F4F37">
        Desserts
      </Typography>
      <Box sx={{
        marginTop: 2,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: 3,
        gridAutoRows: '1fr',
      }}>
        {productsData.map(product => (
          <Card key={product.id} sx={{
            maxWidth: 300,
            borderRadius: 2,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}>
            {product.image && (
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
                sx={{
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                  width: '100%',
                  height: '160px',
                  objectFit: 'contain',
                }}
              />
            )}
            <CardContent sx={{
              padding: 2,
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              position: 'relative', 
            }}>
              <Box>
                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
                {product.price && (
                  <Typography variant="body2" color="text.secondary">
                    ${product.price.toFixed(2)}
                  </Typography>
                )}
              </Box>
              <Link href={`/productsDetail/${product.id}`} passHref>
                <IconButton
                  aria-label="details"
                  sx={{
                    ml: 1,
                    alignSelf: 'flex-end',
                    position: 'absolute', 
                    bottom: 9,         
                    right: 8,          
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}