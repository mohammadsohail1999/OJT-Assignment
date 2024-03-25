import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductListAction } from "../redux/actions/productActions";
import {
  Box,
  Container,
  Grid,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { getProductsState } from "../redux/reducers/ProductReducer";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import { useParams } from "react-router-dom";

const Homepage = () => {
  const dispatch = useDispatch();

  const products = useSelector(getProductsState);

  const [paginatedProducts, setPaginatedProduct] = useState(products);
  const [limit, setLimit] = useState(5);

  const [page, setPage] = useState(1);

  let totalPages = Math.ceil(products?.length / limit);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductListAction(id ? `/category/${id}` : ""));
  }, [id]);

  useEffect(() => {
    if (products?.length) {
      if (page === 1) {
        setPaginatedProduct(products?.slice(0, limit));
      } else {
        setPaginatedProduct(products.slice(page * limit - limit, page * limit));
      }
    }
  }, [products?.length, page, limit]);

  useEffect(() => {
    setPage(1);
  }, [limit, id]);

  return (
    <Box>
      <Container
        maxWidth="md"
        sx={{
          paddingY: "2rem",
          marginTop: "3rem",
        }}
      >
        <Categories />
        <Grid my={"1.5rem"} container spacing={4}>
          {paginatedProducts?.length
            ? paginatedProducts?.map((product) => {
                return (
                  <Grid key={product?.id} item xs={12} md={6} lg={4}>
                    <ProductCard cardData={product} />
                  </Grid>
                );
              })
            : null}
        </Grid>

        <Stack
          py={"3rem"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"row"}
        >
          <Pagination
            page={page}
            count={totalPages}
            onChange={(e, page) => {
              setPage(page);
            }}
          />

          <Select
            value={limit}
            onChange={(e) => {
              setLimit(e.target.value);
            }}
            sx={{ height: "2.4rem" }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
          </Select>
        </Stack>
      </Container>
    </Box>
  );
};

export default Homepage;
