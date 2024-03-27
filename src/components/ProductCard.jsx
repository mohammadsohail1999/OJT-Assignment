import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ cardData }) {
  const addtoCart = (e) => {
    e.stopPropagation();
    toast.success("Added to cart!");
  };

  const navigate = useNavigate();

  const NavigatetoProductDetail = (id) => {
    navigate(`/${id}`);
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "all 500 ease",
        },
      }}
      raised={false}
      onClick={() => {
        NavigatetoProductDetail(cardData?.id);
      }}
    >
      <Box>
        <CardMedia
          component="img"
          height="200"
          image={cardData?.image}
          sx={{
            objectFit: "fill",
          }}
        />
        <CardContent>
          <Typography textAlign={"center"} variant="h5" color="text.secondary">
            {cardData?.title}
          </Typography>
          <Typography></Typography>
        </CardContent>
      </Box>

      <CardActions disableSpacing>
        <Button fullWidth variant="contained" onClick={addtoCart}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}


// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Typography from '@mui/material/Typography';
// import { IconButton } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { useNavigate } from 'react-router-dom';

// export default function ProductCard({ cardData }) {
//   const navigate = useNavigate();

//   const navigateToProductDetail = (id) => {
//     navigate(`/${id}`);
//   };

//   return (
//     <Card
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         cursor: 'pointer',
//         borderRadius: '8px', // Adjust border radius for square cards
//         boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
//         transition: 'transform 0.3s ease',
//         '&:hover': {
//           transform: 'scale(1.05)',
//         },
//       }}
//       raised={false}
//       onClick={() => {
//         navigateToProductDetail(cardData?.id);
//       }}
//     >
//       <CardMedia
//         component="img"
//         height="200" // Set a fixed height for the card
//         width="100%" // Maintain aspect ratio for square cards
//         image={cardData?.image}
//         alt={cardData?.title}
//         sx={{
//           objectFit: 'cover',
//           borderRadius: '8px 8px 0 0', // Adjust border radius for the top corners
//         }}
//       />
//       <CardContent>
//         <Typography variant="h6" align="center" gutterBottom>
//           {cardData?.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" align="center">
//           Price: ${cardData?.price}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing sx={{ justifyContent: 'center' }}>
//         <IconButton
//           aria-label="add to cart"
//           onClick={(e) => {
//             e.stopPropagation();
//             // Handle adding to cart functionality here
//           }}
//         >
//           <AddShoppingCartIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// }
