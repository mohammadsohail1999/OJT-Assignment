import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailAction } from '../redux/actions/productDetailActions';
import { Typography, Paper, Grid, CircularProgress, Container, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productDetail = useSelector((state) => state.productDetail);

  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  useEffect(() => {
    dispatch(getProductDetailAction(id));
  }, [dispatch, id]);

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Add to cart functionality
  };

  if (!productDetail || productDetail.loading) {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <CircularProgress />
      </Grid>
    );  }

  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={12} sm={8}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Container maxWidth='sm'>
            <Typography variant="h6" gutterBottom>
              {productDetail.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
            Price: ${productDetail.price}
          </Typography>
            <img
              src={productDetail.image}
              alt={productDetail.title}
              style={{ width: '200px', height: 'auto' }}
            />
          </Container>
          <Typography>Description:</Typography>
          <Typography variant="body1" gutterBottom>
            {productDetail.description}
          </Typography>

          <div style={{ marginTop: '20px' }}>
            <IconButton onClick={handleDecrement} disabled={quantity === 1}>
              <RemoveIcon />
            </IconButton>
            <span style={{ margin: '0 10px' }}>{quantity}</span>
            <IconButton onClick={handleIncrement} disabled={quantity === 10}>
              <AddIcon />
            </IconButton>
          </div>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;

