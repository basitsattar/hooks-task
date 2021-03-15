/* eslint-disable */
import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';

import DashboardView from 'src/views/DashboardView';
import LoginView from 'src/views/auth/LoginView';


const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      
      { path: 'dashboard', element: <DashboardView /> },
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      // { path: '/', element: <Navigate to="/app/dashboard" /> },
    ]
  }
];
const openRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/login" /> }
    ]
  }
];
const protectedRoutes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <DashboardView /> },
      
    ]
  }
];

export { protectedRoutes, openRoutes, routes };
