// components/ShopCategoryList.js
import React from 'react';

const ShopCategoryList = ({ categories, onSelect, selected }) => (
  <ul style={{ listStyleType: 'none', padding: 0, marginRight: '20px' }}>
    {categories.map(category => (
      <li
        key={category}
        style={{
          padding: '8px',
          cursor: 'pointer',
          fontWeight: selected === category ? 'bold' : 'normal',
        }}
        onClick={() => onSelect(category)}
      >
        {category}
      </li>
    ))}
  </ul>
);

export default ShopCategoryList;