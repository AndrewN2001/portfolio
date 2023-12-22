import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Experience from './pages/experience';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ContactForm from './pages/contactform';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  }, 
  {
    path: 'experience',
    element: <Experience/>
  },
  {
    path: 'contact',
    element: <ContactForm/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
