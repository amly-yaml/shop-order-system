import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const EatOption = ({ label, image, href }) => (
  <Link href={href} style={{ textDecoration: 'none', color: 'inherit', margin: '10px' }}>
    <Box sx={{ textAlign: 'center', border: '1px solid #ccc', borderRadius: 4, padding: 3, cursor: 'pointer' }}>
      <img src={image} alt={label} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: 4 }} />
      <Typography sx={{ mt: 1 }} variant="subtitle1">{label}</Typography>
    </Box>
  </Link>
);

export default EatOption;