// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import { Badge, IconButton, Stack } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { getThemeState } from "../redux/reducers/ThemeReducer";
// import ThemeActions from "../redux/actions/ThemeActions";
// import { useNavigate } from "react-router-dom";

// export default function MenuAppBar() {
//   const theme = useSelector(getThemeState);

//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const toggleTheme = () => {
//     dispatch(ThemeActions);
//   };

//   const navigateToCart = () => {
//     navigate("/cart");
//   };

//   return (
//     <Box>
//       <AppBar>
//         <Toolbar>
//           <Stack
//             direction={"row"}
//             flex={"1"}
//             alignItems={"center"}
//             justifyContent={"space-between"}
//           >
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Ecommerce
//             </Typography>
//             <Stack direction={"row"} spacing={2}>
//               <IconButton aria-label="cart" onClick={navigateToCart}>
//                 <Badge badgeContent={4}>
//                   <ShoppingBagIcon />
//                 </Badge>
//               </IconButton>

//               <IconButton onClick={toggleTheme}>
//                 {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
//               </IconButton>
//             </Stack>
//           </Stack>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }


import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Badge, IconButton, Stack, Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getThemeState } from "../redux/reducers/ThemeReducer";
import ThemeActions from "../redux/actions/ThemeActions";
import { useNavigate } from "react-router-dom";

export default function MenuAppBar() {
  const theme = useSelector(getThemeState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toggleTheme = () => {
    dispatch(ThemeActions);
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Box display="flex" alignItems="center">
              <Typography variant="h6" component="div">
                Ecommerce
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton
                aria-label="cart"
                color="inherit"
                onClick={navigateToCart}
              >
                <Badge badgeContent={4} color="error">
                  <ShoppingBagIcon />
                </Badge>
              </IconButton>

              <Box display="flex" alignItems="center">
                <Typography variant="body2">Dark Mode</Typography>
                <Switch
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                  name="theme-switch"
                  color="default"
                />
              </Box>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
