import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Homepage from './pages/Homepage';
import Soluciones from './pages/Soluciones';
import Proyects from './pages/Proyects';
import About from './pages/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
    children:[
      {
        path:"",
        element: <Homepage/>
        
      },
      {
        path: "solutions",
        element: <Soluciones/>
      },
      {
        path: "proyects",
        element: <Proyects/>
      },
      {
        path: "about",
        element: <About/>
      },
    ],
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


