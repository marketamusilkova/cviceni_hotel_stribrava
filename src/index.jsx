import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { AdminPage } from './components/AdminPage';
import React from 'react';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => (<>
  <Header />
  <Outlet />
  <Footer />
  </>
)
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        
      },
      {
        path: "/admin",
        element: <AdminPage />,
        
      }
    ]
  }
])

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
