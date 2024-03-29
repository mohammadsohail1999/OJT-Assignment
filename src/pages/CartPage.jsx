import React from 'react'
import { useSelector } from 'react-redux'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Grid,
  CardMedia,
  Box,
  Paper,
  Tooltip,
  Button,
  Rating,
  MenuItem,
  Select,
  Stack,
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import useCart from '../hooks/useCart'

const Cart = () => {
  const {
    items: cartItems,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useCart()

  const saveForLater = item => {
    console.log('Item saved for later:', item.id)
  }

  const shareItem = item => {
    console.log('Share item:', item.id)
  }

  const calculateSubtotal = () => {
    return cartItems?.reduce((acc, val) => {
      return acc + val?.quantity * val?.price
    }, 0)
  }

  return (
    <div>
      <Typography
        variant='h4'
        gutterBottom
        align='center'
        style={{ marginBottom: '1rem' }}
      >
        Total Items ({cartItems?.length})
      </Typography>
      {cartItems.length === 0 ? (
        <Typography
          variant='subtitle1'
          align='center'
          style={{ marginBottom: '2rem' }}
        >
          Your cart is empty
        </Typography>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Paper elevation={1} style={{ padding: '1rem' }}>
              <List>
                {cartItems.map((item, index) => (
                  <div key={item.id}>
                    <ListItem disablePadding>
                      <Grid container alignItems='center'>
                        <Grid
                          item
                          xs={3}
                          display='flex'
                          justifyContent='center'
                          alignItems='center'
                        >
                          <CardMedia
                            component='img'
                            image={item.image}
                            alt={item.title}
                            style={{
                              width: 100,
                              height: 100,
                              objectFit: 'fill',
                            }}
                          />
                        </Grid>
                        <Grid item xs={9}>
                          <ListItemText
                            primary={item.title}
                            secondary={
                              <Typography variant='body2' component='span'>
                                <span
                                  style={{
                                    color: true ? 'green' : 'red',
                                  }}
                                >
                                  In Stock
                                </span>
                                <br />
                                <span>
                                  <Rating
                                    name='read-only'
                                    value={item.rating.rate}
                                    readOnly
                                  />
                                </span>
                                <br />
                                <span style={{ color: '#666' }}>
                                  Price: Rs {item.price}
                                </span>
                                <br />
                                <Box display='flex' alignItems='center'>
                                  <IconButton
                                    variant='contained'
                                    disabled={item?.quantity === 1}
                                    onClick={() => decrementQuantity(item)}
                                  >
                                    <RemoveIcon />
                                  </IconButton>
                                  <Typography
                                    variant='body2'
                                    style={{ margin: '0 8px' }}
                                  >
                                    {item?.quantity || 0}
                                  </Typography>
                                  <IconButton
                                    variant='contained'
                                    disabled={item?.quantity === 10}
                                    onClick={() => incrementQuantity(item)}
                                  >
                                    <AddIcon />
                                  </IconButton>
                                </Box>
                                <Tooltip title='Delete'>
                                  <IconButton
                                    size='small'
                                    aria-label='delete'
                                    onClick={() => removeFromCart(item.id)}
                                  >
                                    <Delete />
                                  </IconButton>
                                </Tooltip>
                                <Button
                                  sx={{
                                    fontSize: '12px',
                                  }}
                                  aria-label='save-for-later'
                                  onClick={() => saveForLater(item)}
                                >
                                  Save for later
                                </Button>
                                <Button
                                  aria-label='share'
                                  sx={{
                                    fontSize: '12px',
                                  }}
                                  onClick={() => shareItem(item)}
                                >
                                  Share
                                </Button>
                              </Typography>
                            }
                          />
                        </Grid>
                      </Grid>
                    </ListItem>
                    <Divider />
                  </div>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Box p={4} bgcolor='background.paper' boxShadow={1}>
              <Typography variant='h6'>Order Summary</Typography>
              <Divider style={{ margin: '8px 0' }} />
              <Stack direction={'column'} spacing={3}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography>Total:</Typography>
                  <Typography variant='body1'>
                    Rs {Math.floor(calculateSubtotal())}
                  </Typography>
                </Stack>

                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography>Delivery Charges:</Typography>
                  <Typography variant='body1'>Rs 0</Typography>
                </Stack>

                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography>Grand Total:</Typography>
                  <Typography variant='body1'>
                    Rs {Math.floor(calculateSubtotal())}
                  </Typography>
                </Stack>
              </Stack>

              {/* <Box mt={2}>
                <Typography variant="body1">EMI available</Typography>
                <Typography variant="body1">Free Delivery Available</Typography>
              </Box> */}
              <Box mt={2} textAlign='right'>
                <Button variant='contained' color='primary' fullWidth>
                  Proceed to Pay
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default Cart
