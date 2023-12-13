import React, { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Index = React.lazy(() => import('./pages/index/Index'));
const Creation = React.lazy(() => import('./pages/creation/Creation'));
const NotFoundPage = React.lazy(() => import('./pages/404/404Page'));

const router = createBrowserRouter([
  {
    index: true,
    element: <Suspense fallback={<Loader />}><Index /></Suspense>,
  },
  {
    path: '/creation',
    element: <Suspense fallback={<Loader />}><Creation /></Suspense>,
  },
  {
    path: '*',
    element: <Suspense fallback={<Loader />}><NotFoundPage /></Suspense>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
