import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductListAction } from "../redux/actions/productActions";
import { Box, Container, Grid } from "@mui/material";
import { getProductsState } from "../redux/reducers/ProductReducer";
import ProductCard from "../components/ProductCard";

const Homepage = () => {
  const dispatch = useDispatch();

  const products = useSelector(getProductsState);

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          paddingY: "2rem",
        }}
      >
        <Grid container spacing={4}>
          {products?.length
            ? products?.map((product) => {
                return (
                  <Grid key={product?.id} item xs={12} md={6} lg={4}>
                    <ProductCard cardData={product} />
                  </Grid>
                );
              })
            : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default Homepage;
