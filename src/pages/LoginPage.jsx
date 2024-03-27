// import React, { useState } from 'react';
// import { Typography, TextField, Button, Paper, Grid, Box, FormControlLabel, Checkbox, Link } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { loginSuccess } from '../redux/actions/authActions';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);

//   const validateEmail = (email) => {
//     // Regular expression for email validation
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const validatePassword = (password) => {
//     // Password must be at least 6 characters long
//     return password.length >= 6;
//   };

//   const handleLogin = () => {
//     if (!validateEmail(email)) {
//       setError('Please enter a valid email address');
//     } else if (!validatePassword(password)) {
//       setError('Password must be at least 6 characters long');
//     } else {
//       dispatch(loginSuccess(email));
//       navigate('/');
//     }
//   };

//   const handleForgotPassword = () => {
//     // Implement logic for handling forgot password
//     console.log('Forgot password clicked');
//   };

//   const handleRememberMe = () => {
//     setRememberMe(!rememberMe);
//   };

//   return (
//     <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
//       <Grid item xs={12} sm={8} md={6} lg={4}>
//         <Paper elevation={3} style={{ padding: '40px', textAlign: 'center' }}>
//           <Typography variant="h4" gutterBottom>
//             Welcome Back!
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             Sign in to your account
//           </Typography>
//           {error && (
//             <Typography variant="body2" color="error" gutterBottom>
//               {error}
//             </Typography>
//           )}
//           <Box mt={3}>
//             <TextField
//               fullWidth
//               label="Email Address"
//               variant="outlined"
//               margin="normal"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Box>
//           <Box mt={2}>
//             <TextField
//               fullWidth
//               label="Password"
//               variant="outlined"
//               margin="normal"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Box>
//           <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
//             <FormControlLabel
//               control={<Checkbox checked={rememberMe} onChange={handleRememberMe} />}
//               label="Remember Me"
//             />
//             <Link onClick={handleForgotPassword} variant="body2" color="primary">
//               Forgot Password?
//             </Link>
//           </Box>
//           <Box mt={3}>
//             <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
//               Sign In
//             </Button>
//           </Box>
//           <Box mt={2}>
//             <Typography variant="body2" color="textSecondary">
//               Don't have an account? <Link to="/signup">Sign Up</Link>
//             </Typography>
//           </Box>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default LoginPage;



import React, { useState } from 'react';
import { Typography, TextField, Button, Paper, Grid, Box, FormControlLabel, Checkbox, Link } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Password must be at least 6 characters long
    return password.length >= 6;
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
    } else if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long');
    } else {
      dispatch(loginSuccess(email));
      navigate('/');
    }
  };

  const handleForgotPassword = () => {
    // Implement logic for handling forgot password
    console.log('Forgot password clicked');
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSignUp = () => {
    navigate('/signup'); // Redirect to the sign-up page
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '40px', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Welcome Back!
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Sign in to your account
          </Typography>
          {error && (
            <Typography variant="body2" color="error" gutterBottom>
              {error}
            </Typography>
          )}
          <Box mt={3}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box mt={2}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
            <FormControlLabel
              control={<Checkbox checked={rememberMe} onChange={handleRememberMe} />}
              label="Remember Me"
            />
            <Link onClick={handleForgotPassword} variant="body2" color="primary">
              Forgot Password?
            </Link>
          </Box>
          <Box mt={3}>
            <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
              Sign In
            </Button>
          </Box>
          <Box mt={2}>
            <Typography variant="body2" color="textSecondary">
              Don't have an account? <Link onClick={handleSignUp}>Sign Up</Link>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
