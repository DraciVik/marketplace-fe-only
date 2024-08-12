'use client'; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Container, Card, CardMedia, CardContent, Typography, Button, TextField } from '@mui/material';
import Link from 'next/link';
import {useCart} from '@/app/CartContext';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity,
      image: product.image,
    });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardMedia
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}
        >
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain"
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {product.description}
          </Typography>
          <div>
            <TextField
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              label="Quantity"
              variant="outlined"
              InputProps={{ inputProps: { min: 1 } }}
              sx={{ width: '100px', marginRight: '16px' }}
            />
            <Button variant="contained" color="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleBack} sx={{ marginLeft: '8px' }}>
              Back
            </Button>
            <Button variant="text" color="primary" component={Link} href="/cart" sx={{ marginLeft: '16px' }}>
              View Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
