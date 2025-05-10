'use client'

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import { removeFromOrder, setOrderNumber } from '../../../redux/orderSlice';
import Link from 'next/link';

function MyOrdersPage() {
  const orders = useSelector((state) => state.order.items);
  const dispatch = useDispatch();

  const [orderNumber, setOrderNumberLocal] = useState('');

  useEffect(() => {
    const randomNum = Math.floor(1000 + Math.random() * 9000); 
    const number = `#${randomNum}`;
    setOrderNumberLocal(number);
    dispatch(setOrderNumber(number)); 
  }, [dispatch]);

  const totalPrice = orders.reduce((total, order) => {
    return total + order.price * order.quantity;
  }, 0);

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      {orders.length === 0 ? (
        <Typography variant="h6" sx={{ mt: 4 }}>
          No items in your order.
        </Typography>
      ) : (
        <>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#6d4c41' }}>
            Is this order Correct?
          </Typography>

          <Box
            sx={{
              backgroundColor: '#fff3e0', // light cream background
              borderRadius: '30px',
              p: 4,
              maxWidth: 600,
              mx: 'auto',
              textAlign: 'left',
            }}
          >
            <Typography sx={{ fontWeight: 'bold', mb: 2, color: '#8d6e63' }}>
              Order {orderNumber}
            </Typography>

            {orders.map((order) => (
              <Box
                key={order.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <Box>
                  <Typography fontSize="20px" fontWeight="bold" color="#4e342e">
                    {order.quantity > 1 ? `${order.quantity}x ` : ''}{order.name}
                  </Typography>
                  <Typography fontSize="14px" fontWeight="medium" color="#6d4c41">
                    Description
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography fontSize="20px" fontWeight="bold" color="#4e342e">
                    ${(order.price * order.quantity).toFixed(2)}
                  </Typography>
                  <Typography
                    sx={{ cursor: 'pointer', color: '#bf360c' }}
                    onClick={() => dispatch(removeFromOrder(order.id))}
                  >
                    Remove
                  </Typography>
                </Box>
              </Box>
            ))}

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px solid #ccc',
                pt: 2,
                mt: 2,
              }}
            >
              <Typography fontSize="20px" fontWeight="bold" color="#3e2723">
                Total
              </Typography>
              <Typography fontSize="20px" fontWeight="bold" color="#3e2723">
                ${totalPrice.toFixed(2)}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 4,
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            <Link href="/">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#d7ccc8',
                  color: '#3e2723',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#bcaaa4',
                  },
                }}
              >
                Order Cancel
              </Button>
            </Link>

            <Link href="/payment">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ffb74d',
                  color: '#4e342e',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#ffa726',
                  },
                }}
              >
                Pay Now / Check out
              </Button>
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
}

export default MyOrdersPage;
