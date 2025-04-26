'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation'; 

export default function DessertsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); 

  useEffect(() => {
    const fetchDesserts = async () => {
      try {
        const response = await fetch('https://desserts.free.beeceptor.com/todos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDesserts();
  }, []);

  const handleAddToCart = (productId) => {
    router.push(`/productsDetail/${productId}`);
    console.log(`Navigate to product ID: ${productId}`);
  };

  if (loading) {
    return <Typography>Loading desserts...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error loading desserts: {error.message}</Typography>;
  }

  return (
    <Box sx={{ paddingTop: 3, paddingX: 2 }}>
      <Typography variant="h4" gutterBottom>
        Desserts
      </Typography>
      <Box sx={{
        marginTop: 2,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: 3,
        gridAutoRows: '1fr', 
      }}>
        {products.map(product => (
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
              <IconButton
                aria-label="add"
                sx={{ ml: 1, alignSelf: 'flex-end' }}
                onClick={() => handleAddToCart(product.id)}
              >
                <AddIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}