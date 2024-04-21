import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Tabela from './components/Tabela.tsx';
import Home from './components/Home.tsx';

const router = createBrowserRouter([
  {
    path: "/tabela",
    element: <Tabela />,
  },
  {
    path:"/",
    element: < Home />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </React.StrictMode>,
)
