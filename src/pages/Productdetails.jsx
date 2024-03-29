// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getProductDetailAction } from "../redux/actions/productDetailActions";
// import {
//   Typography,
//   Paper,
//   Grid,
//   CircularProgress,
//   Container,
//   Button,
//   IconButton,
//   Box,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

// const ProductDetails = () => {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const productDetail = useSelector((state) => state.productDetail);

//   const [quantity, setQuantity] = useState(1); // Initialize quantity state

//   useEffect(() => {
//     dispatch(getProductDetailAction(id));
//   }, [dispatch, id]);

//   const handleIncrement = () => {
//     if (quantity < 10) {
//       setQuantity(quantity + 1);
//     }
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     // Add to cart functionality
//   };

//   if (!productDetail || productDetail.loading) {
//     return (
//       <Grid
//         container
//         justifyContent="center"
//         alignItems="center"
//         style={{ height: "100vh" }}
//       >
//         <CircularProgress />
//       </Grid>
//     );
//   }

//   return (
//     <Container sx={{ marginTop: '20px' }} maxWidth="md" >
//       <Paper elevation={3} style={{ padding: "20px", textAlign: "left" }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={4}>
//             <img
//               src={productDetail.image}
//               alt={productDetail.title}
//               style={{ width: "100%", height: "auto" }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={8}>
//             <Typography variant="h4" gutterBottom>
//               {productDetail.title}
//             </Typography>
//             <Typography variant="h6" gutterBottom>
//               Price: ${productDetail.price}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               {productDetail.description}
//             </Typography>
//             <Box mt={3} display="flex" alignItems="center">
//               <IconButton onClick={handleDecrement} disabled={quantity === 1}>
//                 <RemoveIcon />
//               </IconButton>
//               <Typography variant="body1">{quantity}</Typography>
//               <IconButton onClick={handleIncrement} disabled={quantity === 10}>
//                 <AddIcon />
//               </IconButton>
//             </Box>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleAddToCart}
//               style={{ marginTop: "20px" }}
//             >
//               Add to Cart
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default ProductDetails;

import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom' // Import useNavigate hook
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailAction } from '../redux/actions/productDetailActions'
import {
  Typography,
  Paper,
  Grid,
  CircularProgress,
  Container,
  Button,
  IconButton,
  Box,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { addToCart } from '../redux/actions/cartActions' // Import addToCart
import ReactImageMagnify from 'react-image-magnify'
import useAuth from '../hooks/useAuth'
import toast from 'react-hot-toast'

const ProductDetails = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate() // Initialize useNavigate hook
  const { id } = useParams()
  const productDetail = useSelector(state => state.productDetail)

  const [quantity, setQuantity] = useState(1) // Initialize quantity state

  useEffect(() => {
    dispatch(getProductDetailAction(id))
  }, [dispatch, id])

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1)
    }
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const { isAuthenticated } = useAuth()

  const handleAddToCart = e => {
    e.stopPropagation()
    if (isAuthenticated) {
      dispatch(addToCart({ ...productDetail })) // Assuming productDetail contains necessary info
      toast.success('Added to cart!')
    } else {
      toast.error('Please login first.')
      navigate('/login')
    }
  }




  // if (!productDetail || productDetail.loading) {
  //   return (
  //     <Grid
  //       container
  //       justifyContent='center'
  //       alignItems='center'
  //       style={{ height: '100vh' }}
  //     >
  //       <CircularProgress />
  //     </Grid>
  //   )
  // }

  return (
    <Container sx={{ marginTop: '20px' }} maxWidth='md'>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'left' }}>
        <Grid container spacing={2}>
          <Grid item xs={3} sm={3}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: productDetail?.image,
                },
                largeImage: {
                  src: productDetail?.image,
                  width: 500,
                  height: 1000,
                },
              }}
              style={{
                zIndex: 100,
              }}
            />
            {/* <img
              src={productDetail?.image}
              alt={productDetail?.title}
              style={{ width: '100%', height: 'auto' }}
            /> */}
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant='h4' gutterBottom>
              {productDetail?.title}
            </Typography>
            <Typography variant='h6' gutterBottom>
              Price: Rs{productDetail?.price}
            </Typography>
            <Typography variant='body1' gutterBottom>
              {productDetail?.description}
            </Typography>
            <Button
              variant='contained'
              color='primary'
              onClick={handleAddToCart}
              style={{ marginTop: '5px' }}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default ProductDetails
