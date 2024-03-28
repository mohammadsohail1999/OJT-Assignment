import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalLoaderStop } from '../redux/actions/GlobalLoadingActions'
import { getGlobalLoaderState } from '../redux/reducers/LoadingReducer'
import { Backdrop, CircularProgress } from '@mui/material'

const GlobalLoader = () => {
  const dispatch = useDispatch()

  const globalLoader = useSelector(getGlobalLoaderState)

  const handleClose = () => {
    dispatch(GlobalLoaderStop())
  }

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={globalLoader}
      onClick={handleClose}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  )
}

export default GlobalLoader
