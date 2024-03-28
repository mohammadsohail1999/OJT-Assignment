import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getAuthState } from '../redux/reducers/authReducer'
function Protected({ children }) {
  const { isAuthenticated, user } = useSelector(getAuthState)

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />
  }
  return children
}
export default Protected
