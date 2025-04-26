'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Box, Typography, Card, CardMedia, CardContent, Button, FormControl, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, TextField, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CakeDetailPage({ onClose }) {
  const { id } = useParams();
  const [cake, setCake] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedFrosting, setSelectedFrosting] = useState('');
  const [decorationText, setDecorationText] = useState('');
  const [addCandles, setAddCandles] = useState(0);
  const [giftWrap, setGiftWrap] = useState(false);

  useEffect(() => {
    const fetchCake = async () => {
      try {
        const response = await fetch(`https://product-detail.free.beeceptor.com/todos/${id}`); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCake(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCake();
  }, [id]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleFrostingChange = (event) => {
    setSelectedFrosting(event.target.value);
  };

  const handleDecorationTextChange = (event) => {
    setDecorationText(event.target.value);
  };

  const handleCandleChange = (event) => {
    setAddCandles(parseInt(event.target.value) || 0);
  };

  const handleGiftWrapChange = (event) => {
    setGiftWrap(event.target.checked);
  };

  const calculateTotalPrice = () => {
    let basePrice = cake?.price || 0;
    const selectedSizePrice = cake?.sizes?.find(size => size.value === selectedSize)?.price || 0;
    const frostingPrice = cake?.frostings?.find(frosting => frosting.value === selectedFrosting)?.price || 0;
    const candlePrice = (cake?.candlePrice || 0) * addCandles;
    const giftWrapPrice = giftWrap ? (cake?.giftWrapPrice || 0) : 0;

    return (basePrice + selectedSizePrice + frostingPrice + candlePrice + giftWrapPrice) * quantity;
  };

  if (loading) {
    return <Typography>Loading cake details...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error loading cake details: {error.message}</Typography>;
  }

  if (!cake) {
    return <Typography>Cake not found</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 900, margin: 'auto', mt: 4, p: 3, position: 'relative' }}>
      <IconButton sx={{ position: 'absolute', top: 10, right: 10 }} onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={cake.image}
            alt={cake.name}
            sx={{ height: 400, objectFit: 'contain' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            {cake.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Price: ${cake.price?.toFixed(2)}
          </Typography>
          <Typography variant="body2" paragraph>
            {cake.description}
          </Typography>

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="size-label">Select Size</InputLabel>
            <Select
              labelId="size-label"
              id="size"
              value={selectedSize}
              onChange={handleSizeChange}
            >
              {cake.sizes?.map((size) => (
                <MenuItem key={size.value} value={size.value}>
                  {size.label} (+${size.price?.toFixed(2)})
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Typography variant="subtitle1">Quantity:</Typography>
            <IconButton onClick={handleQuantityDecrement} size="small" sx={{ ml: 1 }}>
              <RemoveIcon />
            </IconButton>
            <TextField
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              inputProps={{ min: 1 }}
              sx={{ width: 60, mx: 1 }}
            />
            <IconButton onClick={handleQuantityIncrement} size="small">
              <AddIcon />
            </IconButton>
          </Box>

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="frosting-label">Select Frosting (Optional)</InputLabel>
            <Select
              labelId="frosting-label"
              id="frosting"
              value={selectedFrosting}
              onChange={handleFrostingChange}
            >
              <MenuItem value="">None</MenuItem>
              {cake.frostings?.map((frosting) => (
                <MenuItem key={frosting.value} value={frosting.value}>
                  {frosting.label} (+${frosting.price?.toFixed(2)})
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Decoration Text (Optional)"
            value={decorationText}
            onChange={handleDecorationTextChange}
            sx={{ mt: 2 }}
          />

          <FormControlLabel
            control={<TextField type="number" value={addCandles} onChange={handleCandleChange} inputProps={{ min: 0 }} sx={{ width: 80 }} />}
            label="Candles (Optional)"
            sx={{ mt: 2 }}
          />

          <FormControlLabel
            control={<input type="checkbox" checked={giftWrap} onChange={handleGiftWrapChange} />}
            label={`Gift Wrap (+$${cake?.giftWrapPrice?.toFixed(2) || 0})`}
            sx={{ mt: 2 }}
          />

          <Typography variant="h6" sx={{ mt: 3 }}>
            Total Price: ${calculateTotalPrice().toFixed(2)}
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Button variant="contained" color="primary" onClick={() => console.log('Added to cart', cake, selectedSize, quantity, selectedFrosting, decorationText, addCandles, giftWrap)}>
              Add to Cart
            </Button>
            <Button variant="outlined" sx={{ ml: 2 }}>
              Buy Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CakeDetailPage;