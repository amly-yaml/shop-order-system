
'use client';

import React, { useState, useEffect } from 'react';
import ShopCategoryList from './components/ShopCategoryList';
import ProductItem from './components/ProductItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';

export default function HomePage() {
  const [eatOption, setEatOption] = useState(null);
  const [selectedShop, setSelectedShop] = useState('Home');
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const dummyProducts = [
      { id: 1, name: 'Coffee', image: 'https://images.unsplash.com/photo-1525797559391-d6c6fd668582?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwcGhvdG9ncmFwaHl8ZW58MHwwfDR8fHww' },
      { id: 2, name: 'Non-Coffee', image: 'https://images.unsplash.com/photo-1649067842726-a5c973a3a62c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxzbW9vdGhpZXxlbnwwfDB8NHx8fDA%3D' },
      { id: 3, name: 'Desserts', image: 'https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRlc3NlcnR8ZW58MHwwfDR8fHww' },
    ];
    setProducts(dummyProducts);
  }, [selectedShop]);

  

  if (!eatOption) {
    return (
      <Box sx={{ textAlign: 'center', padding: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Where would you like to eat?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Box
            onClick={() => setEatOption('eat-in')}
            sx={{ margin: 2, border: '1px solid #ccc', borderRadius: 4, padding: 3, cursor: 'pointer', textAlign: 'center' }}
          >
            <img src="/images/eat_in_option.jpg" alt="Eat In" style={{ width: 150, height: 200, objectFit: 'cover', borderRadius: 4 }} />
            <Typography sx={{ mt: 1 }} variant="subtitle1">Eat In</Typography>
          </Box>
          <Box
            onClick={() => setEatOption('take-away')}
            sx={{ margin: 2, border: '1px solid #ccc', borderRadius: 4, padding: 3, cursor: 'pointer', textAlign: 'center' }}
          >
            <img src="/images/take_away_option.jpg" alt="Take Away" style={{ width: 150, height: 200, objectFit: 'cover', borderRadius: 4 }} />
            <Typography sx={{ mt: 1 }} variant="subtitle1">Take Away</Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', paddingTop: 3 }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, paddingRight: 2, marginLeft: 3 }}>
        <Box sx={{ marginTop: 2, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(200px, 2fr))', gap: 10 }}>
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}