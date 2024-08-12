'use client';

import { Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import {useCart} from '../CartContext';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="div" gutterBottom>
        Shopping Cart
      </Typography>
      {cart.length > 0 ? (
        <>
          <Grid container spacing={4}>
            {cart.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card>
                  <CardContent>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                    <Typography variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity: {item.quantity}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ${item.price}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => removeFromCart(item.id)}
                      sx={{ marginTop: '8px' }}
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h5" component="div" sx={{ marginTop: 4 }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
          <Button variant="contained" color="primary" onClick={clearCart} sx={{ marginTop: '16px' }}>
            Clear Cart
          </Button>
        </>
      ) : (
        <Typography variant="body1" color="text.secondary">
          Your cart is empty. <Link href="/">Continue shopping</Link>
        </Typography>
      )}
    </Container>
  );
}
