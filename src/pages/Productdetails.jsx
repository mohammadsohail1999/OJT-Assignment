import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailAction } from "../redux/actions/productDetailActions";
import {
  Typography,
  Paper,
  Grid,
  CircularProgress,
  Container,
} from "@mui/material";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(getProductDetailAction(1)); // Dispatch getProductDetailAction with product ID
  }, [dispatch]);

  if (!state || state.loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={12} sm={8}>
        <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Product Detail
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="h6" gutterBottom>
              {state.title}
            </Typography>
            <img
              src={state.image}
              alt={state.title}
              style={{ width: "200px", height: "auto" }}
            />{" "}
          </Container>
          <Typography variant="body1" gutterBottom>
            {state.description}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Price: ${state.price}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
