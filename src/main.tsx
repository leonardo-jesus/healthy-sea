import { DashboardPage } from '@/pages/Dashboard';
import { LoginPage } from '@/pages/Login.tsx';
import { NotFoundPage } from '@/pages/NotFound';
import { SignUpPage } from '@/pages/SignUp';
import '@/styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<LoginPage />} errorElement={<NotFoundPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
