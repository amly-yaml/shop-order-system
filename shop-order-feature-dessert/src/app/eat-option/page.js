import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import EatOption from '../components/EatOption';

export default function EatOptionPage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
         variant="h4" gutterBottom>
          How would you like to eat?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <EatOption label="Eat In" image="/images/eat_in_option.jpg" href="/category/eat-in" />
          <EatOption label="Take Away" image="/images/take_away_option.jpg" href="/category/take-away" />
        </Box>
      </Box>
    </Box>
  );
}