import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './pages/index'
import Error from './pages/_error'
import Ideas from './pages/ideas'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const ROUTES = {
  HOME: "/",
  IDEAS: "/ideas",
};

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: ROUTES.IDEAS,
    element: <Ideas />,
    errorElement: <Error />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
