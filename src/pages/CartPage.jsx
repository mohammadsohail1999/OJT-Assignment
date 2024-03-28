// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import {
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
//   Divider,
//   Grid,
//   CardMedia,
//   Box,
//   Paper,
//   Tooltip,
//   Button,
//   Stack,
// } from '@mui/material'
// import { Delete, Add, Remove } from '@mui/icons-material'
// import { REMOVE_FROM_CART } from '../redux/actionTypes'
// import { updateCart } from '../redux/actions/cartActions'

// const Cart = () => {
//   const cartItems = useSelector(state => state.cart.items)
//   const dispatch = useDispatch()

//   const [quantityCount, setQuantityCount] = useState({})

//   const removeFromCart = itemId => {
//     dispatch({ type: REMOVE_FROM_CART, payload: itemId })
//   }

//   const incrementQuantity = cartItem => {
//     dispatch(updateCart({ ...cartItem, quantity: cartItem?.quantity + 1 || 1 }))
//   }

//   const decrementQuantity = cartItem => {
//     dispatch(updateCart({ ...cartItem, quantity: cartItem?.quantity - 1 || 1 }))
//   }

//   const calculateSubtotal = () => {
//     let total = 0
//     cartItems.forEach(item => {
//       total += item.price * (quantityCount[item.id] || 0)
//     })
//     return total
//   }

//   return (
//     <div>
//       <Typography
//         variant='h4'
//         gutterBottom
//         align='center'
//         style={{ marginBottom: '1rem' }}
//       >
//         Your Cart
//       </Typography>
//       {cartItems.length === 0 ? (
//         <Typography
//           variant='subtitle1'
//           align='center'
//           style={{ marginBottom: '2rem' }}
//         >
//           Your cart is empty
//         </Typography>
//       ) : (
//         <Grid>
//           <Paper elevation={1} style={{ padding: '1rem' }}>
//             <List>
//               {cartItems.map(item => (
//                 <div key={item.id}>
//                   <ListItem disablePadding>
//                     <Grid container alignItems='center' marginY={'1rem'}>
//                       <Grid item xs={8}>
//                         <Stack direction={'row'} spacing={3}>
//                           <CardMedia
//                             component='img'
//                             image={item.image}
//                             alt={item.title}
//                             style={{
//                               width: 100,
//                               height: 100,
//                               objectFit: 'fill',
//                             }}
//                           />
//                           <ListItemText
//                             primary={item.title}
//                             secondary={
//                               <>
//                                 <Typography variant='body2' component='span'>
//                                   <Typography variant='body2' component='span'>
//                                     <span
//                                       style={{
//                                         color: item.available ? 'green' : 'red',
//                                       }}
//                                     >
//                                       {(item.available = 'In Stock')}
//                                     </span>
//                                     <br />
//                                   </Typography>
//                                 </Typography>
//                                 <Stack direction={'row'} alignItems={'center'}>
//                                   <IconButton
//                                     color='primary'
//                                     disabled={item?.quantity === 1}
//                                     onClick={() => decrementQuantity(item)}
//                                   >
//                                     <Remove />
//                                   </IconButton>
//                                   <Typography>{item?.quantity}</Typography>
//                                   <IconButton
//                                     color='primary'
//                                     disabled={item?.quantity === 10}
//                                     onClick={() => incrementQuantity(item)}
//                                   >
//                                     <Add />
//                                   </IconButton>
//                                 </Stack>
//                               </>
//                             }
//                           />
//                         </Stack>
//                       </Grid>
//                       <Grid
//                         item
//                         xs={4}
//                         sx={{
//                           display: 'flex',
//                         }}
//                         justifyContent={'flex-end'}
//                         alignSelf={'flex-start'}
//                       >
//                         <Tooltip title='Delete'>
//                           <IconButton
//                             aria-label='delete'
//                             onClick={() => removeFromCart(item.id)}
//                           >
//                             <Delete />
//                           </IconButton>
//                         </Tooltip>
//                       </Grid>
//                     </Grid>
//                   </ListItem>
//                   <Divider />
//                 </div>
//               ))}
//             </List>
//             <Box mt={2}>
//               <Stack direction={'row'} justifyContent={'space-between'}>
//                 <Typography variant='h6'>
//                   Total Items ({cartItems?.length})
//                 </Typography>

//                 <Stack>
//                   <Typography
//                     variant='h6'
//                     component='span'
//                     style={{ marginRight: '1rem' }}
//                   >
//                     Subtotal: ${calculateSubtotal()}
//                   </Typography>
//                   <Button variant='contained' color='primary'>
//                     Checkout
//                   </Button>
//                 </Stack>
//               </Stack>
//             </Box>
//           </Paper>
//         </Grid>
//       )}
//     </div>
//   )
// }

// export default Cart

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
  Rating,
  Container,
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import { REMOVE_FROM_CART } from '../redux/actionTypes'
import { updateCart } from '../redux/actions/cartActions'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import useCart from '../hooks/useCart'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  // const cartItems = useSelector(state => state.cart.items)

  const {
    items: cartItems,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useCart()
  const dispatch = useDispatch()

  const saveForLater = item => {
    // console.log('Item saved for later:', itemId)
  }

  const shareItem = item => {
    // console.log('Share item:', itemId)
  }

  const calculateSubtotal = () => {
    return cartItems?.reduce((acc, val) => {
      return acc + val?.quantity * val?.price
    }, 0)
  }

  const navigate = useNavigate()

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
        <Container maxWidth='lg'>
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
                          style={{
                            width: 100,
                            height: 100,
                            // borderRadius: '50%',
                            objectFit: 'fill',
                          }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <ListItemText
                          primary={item.title}
                          secondary={
                            <Typography variant='body2' component='span'>
                              <span
                                style={{
                                  color: true ? 'green' : 'red',
                                }}
                              >
                                {/* {item.available ? 'In Stock' : 'Out of Stock'} */}
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
                                  {/* {quantityCount[item.id] || 0} */}
                                </Typography>
                                <IconButton
                                  variant='contained'
                                  disabled={item?.quantity === 10}
                                  onClick={() => incrementQuantity(item)}
                                >
                                  <AddIcon />
                                </IconButton>
                              </Box>
                              <Tooltip title='Delete' sx={{ fontSize: 15 }}>
                                <IconButton
                                  aria-label='delete'
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Delete />
                                </IconButton>
                              </Tooltip>
                              <Tooltip
                                title='Save for Later'
                                sx={{ fontSize: 15 }}
                              >
                                <IconButton
                                  aria-label='save-for-later'
                                  onClick={() => saveForLater(item.id)}
                                >
                                  Save for later
                                </IconButton>
                              </Tooltip>
                              <Tooltip title='Share' sx={{ fontSize: 15 }}>
                                <IconButton
                                  aria-label='share'
                                  onClick={() => shareItem(item.id)}
                                >
                                  Share
                                </IconButton>
                              </Tooltip>
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
                Subtotal: Rs {Math.floor(calculateSubtotal())}
              </Typography>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  navigate('/checkout')
                }}
              >
                Checkout
              </Button>
            </Box>
          </Paper>
        </Container>
      )}
    </div>
  )
}

export default Cart
