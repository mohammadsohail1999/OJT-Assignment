import { Box, Typography } from '@mui/material'

const ErrorPage = () => {
  return (
    <Box
      sx={{
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography component={'h4'}>Something went wrong...</Typography>
    </Box>
  )
}

export default ErrorPage
