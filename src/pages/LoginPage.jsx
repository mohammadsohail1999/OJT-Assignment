import React, { useState } from 'react'
import { Typography, TextField, Button, Paper, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/actions/authActions'
import { Navigate, redirect, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (email === 'rohit@gmail.com' && password === 'password') {
      dispatch(loginSuccess(email))
      navigate('/')
    } else {
      setError('Invalid email or password')
    }
  }

  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to='/' replace />
  }

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{ height: '100vh' }}
    >
      <Grid item xs={10} sm={6} md={4} lg={3}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant='h5' align='center' gutterBottom>
            Login
          </Typography>
          {error && (
            <Typography
              variant='body2'
              color='error'
              align='center'
              gutterBottom
            >
              {error}
            </Typography>
          )}
          <TextField
            fullWidth
            label='Email'
            variant='outlined'
            margin='normal'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label='Password'
            variant='outlined'
            margin='normal'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={handleLogin}
          >
            Login
          </Button>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default LoginPage
