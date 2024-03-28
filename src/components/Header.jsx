import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import {
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getThemeState } from '../redux/reducers/ThemeReducer'
import ThemeActions from '../redux/actions/ThemeActions'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import useAuth from '../hooks/useAuth'
import IsOnline from './IsOnline'
import useCart from '../hooks/useCart'

const HeaderSettings = ['Logout']

export default function MenuAppBar() {
  const theme = useSelector(getThemeState)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { items } = useCart()

  const { logout, isAuthenticated, user } = useAuth()

  const toggleTheme = () => {
    dispatch(ThemeActions)
  }

  const navigateToCart = () => {
    navigate('/cart')
  }

  const navigateToLogin = () => {
    navigate('/login')
  }

  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Box>
      <AppBar>
        <IsOnline />
        <Toolbar>
          <Stack
            direction={'row'}
            flex={'1'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <NavLink
              to='/'
              style={{
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Ecommerce
            </NavLink>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ecommerce
            </Typography> */}
            <Stack direction={'row'} spacing={2}>
              {isAuthenticated ? (
                <IconButton aria-label='cart' onClick={navigateToCart}>
                  <Badge badgeContent={items?.length}>
                    <ShoppingBagIcon />
                  </Badge>
                </IconButton>
              ) : null}

              <IconButton onClick={toggleTheme}>
                {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>

              {isAuthenticated ? (
                <>
                  <Tooltip title={user ? user : ''}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <AccountCircleIcon />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id='menu-appbar'
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {HeaderSettings.map(setting => (
                      <MenuItem
                        key={setting}
                        onClick={() => {
                          handleCloseUserMenu()
                          if (setting === 'Logout') {
                            logout()
                          }
                        }}
                      >
                        <Typography textAlign='center'>{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <Button onClick={navigateToLogin} variant='outlined'>
                  Login
                </Button>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
