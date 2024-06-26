import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { AppProvider } from './context/AppContext.tsx';
import AppLayout from './pages/AppLayout/AppLayout.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import Pressure from './pages/Pressure/Pressure.tsx';
import Pulse from './pages/Pulse/Pulse.tsx';
import Temperature from './pages/Temperature/Temperature.tsx';
import Graphics from './pages/Graphics/Graphics.tsx';
import './styles/index.css';
import OutdoorTemperature from './pages/OutdoorTemperature/OutdoorTemperature.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to='/pressure' replace />,
      },
      {
        path: '/pressure',
        element: (
          <Pressure caption={'Просмотр и изменение показателей давления'}
                    title={'Давление'} />
        ),
      },
      {
        path: '/pulse',
        element: <Pulse caption={'Просмотр и изменение показателей пульса'}
                        title={'Пульс'} />,
      },
      {
        path: '/temperature',
        element: (
          <Temperature caption={'Просмотр и изменение показателей температуры'}
                       title={'Температура'} />
        ),
      },
      {
        path: '/graphics',
        element: <Graphics title={'Графики'} />,
      },
      {
        path: '/outdoor',
        element: <OutdoorTemperature caption={'Просмотр показателя температуры на улице'}
                                     title={'Температура на улице'} />,
      },
    ],
  },
], { basename: '/health-widget' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
);
