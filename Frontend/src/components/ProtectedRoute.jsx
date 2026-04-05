import { getData } from '@/context/userContext'
import React from 'react'
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = getData();

  if (loading) return null; // or replace with a spinner

  return user ? children : <Navigate to={'/login'} />;
}

export default ProtectedRoute