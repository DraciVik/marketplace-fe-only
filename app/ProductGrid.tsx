'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Slider,
  Button,
  SelectChangeEvent,
} from '@mui/material';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface ProductGridProps {
  products: Product[];
}

const categories = ['All', 'Electronics', 'Jewelery', 'Men\'s Clothing', 'Women\'s Clothing'];

export default function ProductGrid({ products }: ProductGridProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handlePriceRangeChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category === 'All' || product.category.toLowerCase() === category.toLowerCase()
    )
    .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const displayedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <TextField
          label="Search Products"
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: '30%' }}
        />

        <FormControl variant="outlined" sx={{ width: '20%' }}>
          <InputLabel>Category</InputLabel>
          <Select value={category} onChange={handleCategoryChange} label="Category">
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ width: '30%' }}>
          <Typography id="price-range-slider" gutterBottom>
            Price Range
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
          />
        </Box>
      </Box>

      {filteredProducts.length > 0 ? (
        <>
          <Grid container spacing={4}>
            {displayedProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Link href={`/product/${product.id}`} passHref>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      sx={{ position: 'relative', height: 0, paddingTop: '100%' }}
                      >
                      <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </CardMedia>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Typography variant="h6" component="div">
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ marginTop: 'auto' }}>
                        ${product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
              <Button variant="contained" color="primary" onClick={() => setPage(page - 1)} disabled={page === 1}>
                Previous
              </Button>
              <Typography variant="body2" sx={{ padding: '0 16px' }}>
                Page {page} of {totalPages}
              </Typography>
              <Button variant="contained" color="primary" onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                Next
              </Button>
            </Box>
          )}
        </>
      ) : (
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No products found.
          </Typography>
        </Box>
      )}
    </div>
  );
}
