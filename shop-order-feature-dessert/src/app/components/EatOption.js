// components/EatOption.js
import React from 'react';

const EatOption = ({ label, image }) => (
  <div style={{ textAlign: 'center', margin: '10px' }}>
    <img src={image} alt={label} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
    <p>{label}</p>
  </div>
);

export default EatOption;