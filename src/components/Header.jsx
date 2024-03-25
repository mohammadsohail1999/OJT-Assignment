import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {ShoppingCart} from "@material-ui/icons";
import { Badge } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  cartIcon:{
    color: "#fff",
    cursor:"pointer",
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ecommerce
          </Typography>

      <Badge badgeContent={4} className={classes.cartIcon} color="error">
            {/* <IconButton> */}
            <ShoppingCart />
            {/* </IconButton> */}
      </Badge>

         
       
        </Toolbar>
      </AppBar>
    </div>
  );
}
