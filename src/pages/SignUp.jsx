import React, { useState } from 'react'
import {
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Box,
  Link,
  Avatar,
} from '@mui/material'
import { Navigate, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { v4 as uuidv4 } from 'uuid'
import useUsers from '../hooks/useUsers'
import toast from 'react-hot-toast'

const SignupPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [error, setError] = useState('')

  const { isAuthenticated } = useAuth()

  const { checkUserExist, addUser } = useUsers()

  const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validatePassword = password => {
    return password.length >= 6
  }

  const handleSignup = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
    } else if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long')
    } else if (password !== confirmPassword) {
      setError('Passwords do not match')
    } else {
      const user = {
        email,
        password,
        avatar,
        id: uuidv4(),
      }

      if (checkUserExist(user)) {
        toast.error('User already Exists')
      } else {
        addUser(user)
        toast.success('User registered successfully')
        navigate('/login')
      }
    }
  }

  const handleLogin = () => {
    // navigate('/login')
  }

  const handleAvatarChange = event => {
    const file = event.target.files[0]
    const maxSize = 2 * 1024 * 1024

    if (!file) {
      setError('Image is required.')
      return
    }

    if (!file.type.match(/image\/(jpg|jpeg|png)/)) {
      setError('Select a valid image (JPEG or PNG).')
      return
    }

    if (file.size > maxSize) {
      setError('Image size exceeds 2MB limit')
      return
    }

    setAvatar(file)
    setError('')
  }

  if (isAuthenticated) {
    return <Navigate to='/' />
  }

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{ height: '100vh' }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant='h4' gutterBottom>
            Sign Up
          </Typography>
          {error && (
            <Typography variant='body2' color='error' gutterBottom>
              {error}
            </Typography>
          )}
          <Box
            mb={2}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Avatar
              src={avatar ? URL.createObjectURL(avatar) : undefined}
              sx={{ width: 80, height: 80 }}
            />
          </Box>
          <input
            accept='image/*'
            id='avatar-upload'
            type='file'
            style={{ display: 'none' }}
            onChange={handleAvatarChange}
          />
          <label htmlFor='avatar-upload'>
            <Button variant='outlined' component='span' fullWidth>
              Upload Avatar
            </Button>
          </label>
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

          <TextField
            fullWidth
            label='Confirm Password'
            variant='outlined'
            margin='normal'
            type='password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={handleSignup}
          >
            Sign Up
          </Button>

          <Box mt={2}>
            <Typography variant='body2' color='textSecondary'>
              Already have an account?{' '}
              <Link onClick={handleLogin} variant='body2' color='primary'>
                Log in
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default SignupPage
