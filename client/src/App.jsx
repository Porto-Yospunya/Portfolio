import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

import Layout from './layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
