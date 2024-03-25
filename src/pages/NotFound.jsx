import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box p="2rem">
      Not found <Link to={"/"}>Back to homepage...</Link>
    </Box>
  );
};

export default NotFound;
