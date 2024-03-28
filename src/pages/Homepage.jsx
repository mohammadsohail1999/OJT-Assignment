import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductListAction } from '../redux/actions/productActions'
import {
  Box,
  Container,
  Grid,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography,
} from '@mui/material'
import { getProductsState } from '../redux/reducers/ProductReducer'
import ProductCard from '../components/ProductCard'
import Categories from '../components/Categories'
import { useParams } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'

const Homepage = () => {
  const dispatch = useDispatch()

  const { data: products, isError } = useSelector(getProductsState)

  const [paginatedProducts, setPaginatedProduct] = useState(products)
  const [limit, setLimit] = useState(5)

  const [page, setPage] = useState(1)

  let totalPages = Math.ceil(products?.length / limit)

  console.log(totalPages, products, 'dubug')

  const { id } = useParams()

  useEffect(() => {
    dispatch(getProductListAction(id ? `/category/${id}` : ''))
  }, [id])

  useEffect(() => {
    if (products?.length) {
      if (page === 1) {
        setPaginatedProduct(products?.slice(0, limit))
      } else {
        setPaginatedProduct(products.slice(page * limit - limit, page * limit))
      }
    }
  }, [products?.length, page, limit])

  useEffect(() => {
    setPage(1)
  }, [limit, id])

  // if(isError){
  //   re
  // }

  return isError ? (
    <ErrorPage />
  ) : (
    <Container
      maxWidth='md'
      sx={{
        paddingY: '2rem',
      }}
    >
      <Categories />
      <Grid my={'1.5rem'} container spacing={4}>
        {paginatedProducts?.length
          ? paginatedProducts?.map(product => {
              return (
                <Grid key={product?.id} item xs={12} md={6} lg={4}>
                  <ProductCard cardData={product} />
                </Grid>
              )
            })
          : null}
      </Grid>

      {paginatedProducts?.length ? (
        <Stack
          py={'3rem'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'row'}
        >
          <Pagination
            page={page}
            count={totalPages}
            onChange={(e, page) => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
              setPage(page)
            }}
          />

          <Select
            value={limit}
            onChange={e => {
              setLimit(e.target.value)
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
            }}
            sx={{ height: '2.4rem' }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
          </Select>
        </Stack>
      ) : null}
    </Container>
  )
}

export default Homepage
