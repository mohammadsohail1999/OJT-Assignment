import React from 'react'
import MenuAppBar from './Header'
import { Box } from '@mui/material'

const Layout = ({ children, sx }) => {
  return (
    <>
      <MenuAppBar />
      <Box marginTop={'6rem'}>{children}</Box>
    </>
  )
}

export default Layout
