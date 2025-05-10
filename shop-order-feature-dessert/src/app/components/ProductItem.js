import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProductItem = ({ product }) => (
  <Card sx={{ maxWidth: '100%', height: 300, position: 'relative', borderRadius: 2 }}>
    <CardMedia
      sx={{
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      image={product.image}
      title={product.name}
    />
    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', p: 2 }}>
      <Typography variant="h6" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
        {product.name}
      </Typography>
    </Box>
  </Card>
);

export default ProductItem;