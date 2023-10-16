import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../utils/UserContext';

const ProtectRoute = () => {
    const {user, setUser} = useUser();
  return (
    user? <Outlet /> : <Navigate to='/login' />
  )
}

export default ProtectRoute