import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Pressure from "./pages/Pressure/Pressure.tsx";
import Pulse from "./pages/Pulse/Pulse.tsx";
import Temperature from "./pages/Temperature/Temperature.tsx";
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to="/pressure" replace />
      },
      {
        path: "/pressure",
        element: <Pressure title={"Просмотр и изменение показателей давления"} />
      },
      {
        path: "/pulse",
        element: <Pulse title={"Просмотр и изменение показателей пульса"}/>
      },
      {
        path: "/temperature",
        element: <Temperature title={"Просмотр и изменение показателей температуры"}/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
