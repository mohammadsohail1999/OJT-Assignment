import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Box,
  Link,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null); // State to store the selected image file
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Password must be at least 6 characters long
    return password.length >= 6;
  };

  const handleSignup = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
    } else if (!validatePassword(password)) {
      setError("Password must be at least 6 characters long");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      console.log("Signup successful");
      navigate("/login");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const maxSize = 2 * 1024 * 1024; // 2MB max size

    // Check if a file was selected
    if (!file) {
      setError("Image is required.");
      return;
    }

    // Check if the selected file is an image
    if (!file.type.match(/image\/(jpg|jpeg|png)/)) {
      setError("Select a valid image (JPEG or PNG).");
      return;
    }

    // Check if the size of the image is within the allowed limit
    if (file.size > maxSize) {
      setError("Image size exceeds 2MB limit");
      return;
    }

    // Set the avatar
    setAvatar(file);
    setError(""); // Clear any previous error messages
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>
          {error && (
            <Typography variant="body2" color="error" gutterBottom>
              {error}
            </Typography>
          )}
          <Box
            mb={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              src={avatar ? URL.createObjectURL(avatar) : undefined}
              sx={{ width: 80, height: 80 }}
            />
          </Box>
          <input
            accept="image/*"
            id="avatar-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleAvatarChange}
          />
          <label htmlFor="avatar-upload">
            <Button variant="outlined" component="span" fullWidth>
              Upload Avatar
            </Button>
          </label>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <Box mt={2}>
            <Typography variant="body2" color="textSecondary">
              Already have an account?{" "}
              <Link onClick={handleLogin} variant="body2" color="primary">
                Log in
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignupPage;
