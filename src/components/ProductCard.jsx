import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import toast from "react-hot-toast";

export default function ProductCard({ cardData }) {
  const addtoCart = () => {
    toast.success("Added to cart!");
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem",
      }}
      raised={false}
    >
      <Box>
        <CardMedia
          component="img"
          height="150"
          image={cardData?.image}
          sx={{
            objectFit: "contain",
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
