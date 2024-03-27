import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import { REMOVE_FROM_CART } from '../redux/actionTypes'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const [quantityCount, setQuantityCount] = useState({})

  const removeFromCart = itemId => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId })
  }

  const incrementQuantity = itemId => {
    setQuantityCount(prevState => ({
      ...prevState,
      [itemId]: (prevState[itemId] || 0) + 1,
    }))
  }

  const decrementQuantity = itemId => {
    if (quantityCount[itemId] > 0) {
      setQuantityCount(prevState => ({
        ...prevState,
        [itemId]: prevState[itemId] - 1,
      }))
    }
  }

  const saveForLater = itemId => {
    console.log('Item saved for later:', itemId)
  }

  const shareItem = itemId => {
    console.log('Share item:', itemId)
  }

  const calculateSubtotal = () => {
    let total = 0
    cartItems.forEach(item => {
      total += item.price * (quantityCount[item.id] || 0)
    })
    return total
  }

  return (
    <div>
      <Typography
        variant='h4'
        gutterBottom
        align='center'
        style={{ marginBottom: '1rem' }}
      >
        Your Cart
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
        <Paper elevation={1} style={{ padding: '1rem' }}>
          <List>
            {cartItems.map(item => (
              <div key={item.id}>
                <ListItem disablePadding>
                  <Grid container alignItems='center'>
                    <Grid item xs={2} sm={1.5}>
                      <CardMedia
                        component='img'
                        image={item.image}
                        alt={item.title}
                        style={{ width: 100, height: 100, borderRadius: '40%' }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText
                        primary={item.title}
                        secondary={
                          <Typography variant='body2' component='span'>
                            <Typography variant='body2' component='span'>
                              <span
                                style={{
                                  color: item.available ? 'green' : 'red',
                                }}
                              >
                                {(item.available = 'In Stock')}
                              </span>
                              <br />
                              <span style={{ color: '#666' }}>
                                Price: ${item.price}
                              </span>
                              <br />
                              <Button
                                variant='outlined'
                                onClick={() => incrementQuantity(item.id)}
                              >
                                +
                              </Button>

                              <Button
                                variant='outlined'
                                onClick={() => decrementQuantity(item.id)}
                              >
                                -
                              </Button>
                              <Tooltip title='Delete'>
                                <IconButton
                                  aria-label='delete'
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Delete />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title='Save for Later'>
                                <IconButton
                                  aria-label='save-for-later'
                                  onClick={() => saveForLater(item.id)}
                                >
                                  Save for later
                                </IconButton>
                              </Tooltip>
                              <Tooltip title='Share'>
                                <IconButton
                                  aria-label='share'
                                  onClick={() => shareItem(item.id)}
                                >
                                  Share
                                </IconButton>
                              </Tooltip>
                            </Typography>
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
          <Box mt={2} display='flex' justifyContent='flex-end'>
            <Typography
              variant='h6'
              component='span'
              style={{ marginRight: '1rem' }}
            >
              Subtotal: ${calculateSubtotal()}
            </Typography>
            <Button variant='contained' color='primary'>
              Checkout
            </Button>
          </Box>
        </Paper>
      )}
    </div>
  )
}

export default Cart
